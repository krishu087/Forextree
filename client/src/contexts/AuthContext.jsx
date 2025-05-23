import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await api.get('/auth/me');
          console.log('Auth check response:', response.data);
          setUser(response.data);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      console.log('Attempting login with:', { email });
      
      const response = await api.post('/auth/login', {
        email,
        password
      });

      const { token, user: userData } = response.data;

      if (!token) {
        throw new Error('No token received from server');
      }

      // Store token
      localStorage.setItem('token', token);
      
      // Set user state
      setUser(userData);
      
      console.log('Login successful, user data:', userData);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const signup = async (name, email, password) => {
    try {
      console.log('Attempting signup with:', { email, name });
      
      const response = await api.post('/auth/signup', {
        name,
        email,
        password
      });

      const { token, user: userData } = response.data;

      if (!token) {
        throw new Error('No token received from server');
      }

      // Store token
      localStorage.setItem('token', token);
      
      // Set user state
      setUser(userData);
      
      console.log('Signup successful, user data:', userData);
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      throw new Error(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 