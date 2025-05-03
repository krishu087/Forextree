# Forextree - Modern Trading Platform

A full-stack trading platform built with React, Express, and MongoDB, featuring real-time data updates and modern UI components.


![Project Logo](ioc.png)
=======
![Project Logo](forextree.png)


## 🚀 Features

- **Modern UI/UX**
  - Built with React 18 and Vite
  - Tailwind CSS for styling
  - Radix UI components for accessible design
  - Dark/Light mode support
  - Responsive design

- **Backend Features**
  - Express.js server
  - MongoDB database integration
  - JWT authentication
  - Real-time updates with Socket.IO
  - Session management

- **Trading Features**
  - Real-time market data
  - Interactive charts with Recharts
  - Trading insights and analysis
  - User portfolio management

## 🛠️ Tech Stack

- **Frontend**
  - React 18
  - Vite
  - Tailwind CSS
  - Radix UI
  - React Query
  - Framer Motion
  - Recharts

- **Backend**
  - Express.js
  - MongoDB
  - Socket.IO
  - Passport.js
  - JWT

- **Development Tools**
  - TypeScript
  - ESLint
  - PostCSS
  - Vite

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- MongoDB (v4.4 or higher)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/forextree.git
   cd forextree
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. **Start the development servers**
   ```bash
   # Start the backend server
   npm run dev

   # In a new terminal, start the frontend development server
   npx vite
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
forextree/
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── contexts/    # React contexts
│   │   └── lib/         # Utility functions
├── server/           # Backend Express application
├── shared/           # Shared types and utilities
└── public/           # Static assets
```

## 🔧 Development

- **Type Checking**
  ```bash
  npm run check
  ```

- **Environment Variables**
  - Development: `.env.development`
  - Production: `.env.production`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or concerns, please open an issue in the repository.

## 🚀 Deployment

### Deploying to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Set up environment variables in Vercel**
   - Go to your project settings in Vercel dashboard
   - Add the following environment variables:
     ```
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     NODE_ENV=production
     ```

4. **Deploy the project**
   ```bash
   vercel
   ```

5. **For subsequent deployments**
   ```bash
   vercel --prod
   ```

### Important Notes for Deployment

- Make sure your MongoDB database is accessible from Vercel's servers
- Consider using MongoDB Atlas for cloud-hosted database
- Update your frontend API calls to use the production URL
- Set up proper CORS configuration in your backend
- Configure proper security headers

---

Built with ❤️ Krishna Panjre
=======
