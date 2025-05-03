import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for handling cookies/auth
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    
    // Handle different error scenarios
    if (response) {
      switch (response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          // Forbidden - user doesn't have permission
          console.error('Access forbidden:', response.data.message);
          break;
        case 404:
          // Not found
          console.error('Resource not found:', response.data.message);
          break;
        case 500:
          // Server error
          console.error('Server error:', response.data.message);
          break;
        default:
          console.error('API error:', response.data.message);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
    } else {
      // Error setting up the request
      console.error('Request setup error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api; 