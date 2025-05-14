import axios from 'axios';

// Log the current API configuration
console.log('API Configuration:', {
  baseURL: '/api',
  environment: import.meta.env.MODE,
  nodeEnv: import.meta.env.NODE_ENV
});

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Log the request details
    console.log('API Request:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
      data: config.data,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`
    });

    // Add auth token if it exists
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', {
      message: error.message,
      config: error.config,
      stack: error.stack
    });
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Log successful responses
    console.log('API Response:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    // Enhanced error logging
    console.error('API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      fullURL: `${error.config?.baseURL}${error.config?.url}`,
      headers: error.config?.headers,
      method: error.config?.method,
      stack: error.stack
    });

    // Handle specific error cases
    if (error.response?.status === 401) {
      console.log('Unauthorized access detected, redirecting to login...');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    // Return a more detailed error message
    return Promise.reject({
      message: error.response?.data?.message || error.message || 'An error occurred',
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      fullURL: `${error.config?.baseURL}${error.config?.url}`
    });
  }
);

// Add a test endpoint
api.get('/health')
  .then(() => console.log('API health check successful'))
  .catch(error => console.error('API health check failed:', error));

export default api; 