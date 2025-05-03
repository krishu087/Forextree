import { Request, Response } from 'express';
import Blog from '../models/Blog';
import User from '../models/User';
import mongoose from 'mongoose';

// Get all blog posts
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .populate('userId', 'name email')
      .lean();

    // Format the blogs to match the frontend interface
    const formattedBlogs = blogs.map(blog => ({
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      author: {
        _id: blog.userId._id,
        name: blog.userId.name,
        email: blog.userId.email
      },
      date: blog.createdAt,
      likes: 0, // You can add likes functionality later
      comments: 0, // You can add comments functionality later
      category: blog.category,
      readTime: blog.readTime,
      isFeatured: false // You can add featured functionality later
    }));

    res.json(formattedBlogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

// Get a single blog post by ID
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error });
  }
};

// Create a new blog post
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, category, readTime, userId } = req.body;
    
    // Validate userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const blog = new Blog({
      title,
      content,
      category,
      readTime,
      userId: new mongoose.Types.ObjectId(userId)
    });

    const savedBlog = await blog.save();
    
    // Populate the user data before sending response
    const populatedBlog = await Blog.findById(savedBlog._id)
      .populate('userId', 'name email')
      .lean();

    res.status(201).json(populatedBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

// Update a blog post
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, category, readTime } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, category, readTime },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog', error });
  }
};

// Delete a blog post
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error });
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