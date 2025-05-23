import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import connectDB from './config/db';
import authRoutes from './routes/auth';
import blogRoutes from './routes/blog';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Server } from 'socket.io';
import { setupWebSocket } from './websocket';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:5000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }
});

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
connectDB().then(() => {
  log('MongoDB connected successfully');
}).catch((error) => {
  log('MongoDB connection error:', error);
  process.exit(1);
});

// Authentication routes with error handling
app.use('/api/auth', (req, res, next) => {
  log(`Auth request: ${req.method} ${req.path}`);
  next();
}, authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  });
});

// Blog routes
app.use('/api/blogs', (req, res, next) => {
  log(`Blog request: ${req.method} ${req.path}`);
  next();
}, blogRoutes);

// API request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  log(`Error: ${err.message}`);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Validation Error',
      errors: Object.values(err.errors).map((e: any) => e.message)
    });
  }
  
  if (err.name === 'MongoError' && err.code === 11000) {
    return res.status(400).json({
      message: 'Duplicate key error',
      error: err.message
    });
  }
  
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

// Serve static files from the React app in production only
if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join(__dirname, '../dist/public');
  app.use(express.static(publicPath));

  // Handle client-side routing - this should be the last route
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

// WebSocket setup
setupWebSocket(io);

const PORT = process.env.PORT || 5001;
httpServer.listen(PORT, () => {
  log(`Server running on port ${PORT}`);
});
