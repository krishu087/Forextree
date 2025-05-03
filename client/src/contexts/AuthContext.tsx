import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Set up axios interceptor for auth token
  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      (config) => {
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

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Checking auth with token:', token);
        if (token) {
          const response = await axios.get('/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log('Auth check response:', response.data);
          setUser(response.data);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      console.log('Attempting login for:', email);
      const response = await axios.post('/api/auth/login', { email, password });
      console.log('Login response:', response.data);
      const { token, user } = response.data;
      
      if (!token || !user) {
        throw new Error('Invalid response from server');
      }

      // Store token
      localStorage.setItem('token', token);
      
      // Set user state with the correct structure
      const userData = {
        id: user.id,
        email: user.email,
        name: user.name
      };
      
      console.log('Setting user state with:', userData);
      setUser(userData);
      
      // Verify the user state was updated
      console.log('User state after update:', userData);
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      setError(null);
      console.log('Attempting signup for:', email);
      const response = await axios.post('/api/auth/signup', { email, password });
      console.log('Signup response:', response.data);
      const { token, user } = response.data;
      
      if (!token || !user) {
        throw new Error('Invalid response from server');
      }

      localStorage.setItem('token', token);
      setUser(user);
      console.log('User state updated:', user);
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || 'Signup failed');
      throw err;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      console.log('Attempting logout');
      await axios.post('/api/auth/logout');
      localStorage.removeItem('token');
      setUser(null);
      console.log('User state cleared');
    } catch (err: any) {
      console.error('Logout error:', err);
      setError(err.response?.data?.message || 'Logout failed');
      throw err;
    }
  };

  // Debug log when user state changes
  useEffect(() => {
    console.log('User state changed:', user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 