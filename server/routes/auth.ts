import express from 'express';
import { register, login, getCurrentUser, updateProfile, changePassword, deleteAccount } from '../controllers/userController';
import { auth } from '../middleware/auth';

const router = express.Router();

// Auth routes
router.post('/signup', register);
router.post('/login', login);
router.get('/me', auth, getCurrentUser);
router.put('/profile', auth, updateProfile);
router.put('/change-password', auth, changePassword);
router.delete('/account', auth, deleteAccount);

export default router; 