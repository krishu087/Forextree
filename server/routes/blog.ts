import { Router } from 'express';
import { 
  getBlogs, 
  getBlogById, 
  createBlog, 
  updateBlog, 
  deleteBlog,
  getBlogsByUserId 
} from '../controllers/blogController';
import { auth } from '../middleware/auth';

const router = Router();

// Debug middleware for all blog routes
router.use((req, res, next) => {
  console.log('Blog route accessed:', {
    method: req.method,
    path: req.path,
    params: req.params,
    query: req.query,
    body: req.body,
    url: req.url,
    originalUrl: req.originalUrl
  });
  next();
});

// Public routes
router.get('/', getBlogs);

// User blogs route with detailed logging
router.get('/user/:userId', async (req, res, next) => {
  try {
    console.log('User blogs route handler called with params:', req.params);
    console.log('Full request details:', {
      method: req.method,
      path: req.path,
      params: req.params,
      query: req.query,
      headers: req.headers,
      url: req.url,
      originalUrl: req.originalUrl
    });
    await getBlogsByUserId(req, res, next);
  } catch (error) {
    console.error('Error in user blogs route handler:', error);
    next(error);
  }
});

// Get single blog by ID
router.get('/:id', getBlogById);

// Protected routes (require authentication)
router.post('/', auth, createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

export default router; 