import { Request, Response } from 'express';
import Blog from '../models/Blog';
import User from '../models/User';
import mongoose from 'mongoose';

// Get all blog posts
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find()
      .populate('author', 'name email')
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Error fetching blogs' });
  }
};

// Get a single blog post by ID
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('author', 'name email');
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Error fetching blog' });
  }
};

// Create a new blog post
export const createBlog = async (req: Request, res: Response) => {
  try {
    console.log('Create blog request received:', {
      body: req.body,
      user: req.user,
      headers: req.headers
    });

    const { title, content, category, tags } = req.body;

    // Validate user
    if (!req.user || !req.user._id) {
      console.error('No user found in request');
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Get user from database to ensure it exists
    const user = await User.findById(req.user._id);
    if (!user) {
      console.error('User not found in database:', req.user._id);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Creating blog with user:', {
      userId: user._id,
      userName: user.name
    });

    // Create new blog
    const blog = new Blog({
      title,
      content,
      author: user._id,
      category,
      tags: tags || []
    });

    // Save blog
    const savedBlog = await blog.save();
    console.log('Blog saved successfully:', {
      blogId: savedBlog._id,
      title: savedBlog.title
    });

    // Update user's blogs array
    user.blogs.push(savedBlog._id);
    await user.save();
    console.log('User updated with new blog');

    res.status(201).json(savedBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({
      message: 'Error creating blog',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// Update a blog post
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, category, tags } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Check if user is the author
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this blog' });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.category = category || blog.category;
    blog.tags = tags || blog.tags;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Error updating blog' });
  }
};

// Delete a blog post
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Check if user is the author
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this blog' });
    }

    await blog.deleteOne();
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Error deleting blog' });
  }
};

// Get blogs by user ID
export const getBlogsByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    console.log('getBlogsByUserId called with userId:', userId);
    
    // Validate userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.log('Invalid user ID format:', userId);
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    // Convert userId to ObjectId
    const userObjectId = new mongoose.Types.ObjectId(userId);
    console.log('Converted user ID to ObjectId:', userObjectId);

    // Check if user exists
    const user = await User.findById(userObjectId);
    console.log('User found:', user ? 'yes' : 'no');

    const blogs = await Blog.find({ userId: userObjectId })
      .sort({ createdAt: -1 })
      .populate('userId', 'name email')
      .lean();

    console.log('Found blogs count:', blogs.length);
    console.log('Blogs:', blogs);

    // Format the blogs to match the frontend interface
    const formattedBlogs = blogs.map(blog => ({
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      category: blog.category,
      readTime: blog.readTime,
      createdAt: blog.createdAt,
      likes: 0,
      comments: 0
    }));

    console.log('Formatted blogs:', formattedBlogs);
    res.json(formattedBlogs);
  } catch (error) {
    console.error('Error in getBlogsByUserId:', error);
    res.status(500).json({ message: 'Error fetching user blogs', error });
  }
}; 