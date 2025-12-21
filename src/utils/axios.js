import axios from 'axios';
import { getLocalStorage, clearLocalStorage, errorToast } from '../helpers';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    timeout: 30000, // 30 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    }
});

// Request Interceptor
api.interceptors.request.use(
    async (config) => {
        // Add token to request if available
        const token = getLocalStorage('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Add timestamp to prevent caching issues (optional)
        config.metadata = { startTime: new Date() };

        return config;
    },
    (error) => {
        // Handle request errors
        errorToast('Failed to send request. Please try again.');
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => {
        // Calculate request duration (optional, useful for logging)
        if (response.config.metadata) {
            const duration = new Date() - response.config.metadata.startTime;
            console.log(`API Request completed in ${duration}ms`);
        }

        // Return response data directly if you prefer
        // return response.data;
        
        // Or return full response
        return response;
    },
    async (error) => {
        // Calculate request duration even for errors
        if (error.config?.metadata) {
            const duration = new Date() - error.config.metadata.startTime;
            console.error(`API Request failed after ${duration}ms`);
        }

        // Handle different error scenarios
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;
            
            switch (status) {
                case 401:
                    // Unauthorized - token expired or invalid
                    clearLocalStorage();
                    errorToast('Session expired. Please login again.');
                    // Optionally redirect to login page
                    // window.location.href = '/login';
                    break;
                
                case 403:
                    // Forbidden - user doesn't have permission
                    errorToast('You do not have permission to perform this action.');
                    break;
                
                case 404:
                    // Not found
                    errorToast('Requested resource not found.');
                    break;
                
                case 422:
                    // Validation error
                    const validationMessage = data?.message || data?.error || 'Validation failed. Please check your input.';
                    errorToast(validationMessage);
                    break;
                
                case 429:
                    // Too many requests
                    errorToast('Too many requests. Please try again later.');
                    break;
                
                case 500:
                case 502:
                case 503:
                case 504:
                    // Server errors
                    errorToast('Server error. Please try again later.');
                    break;
                
                default:
                    // Other errors
                    const errorMessage = data?.message || data?.error || `Request failed with status ${status}`;
                    errorToast(errorMessage);
            }

            // Return error with response data for component-level handling
            return Promise.reject({
                ...error,
                message: data?.message || error.message,
                status,
                data: data
            });

        } else if (error.request) {
            // Request was made but no response received
            if (error.code === 'ECONNABORTED') {
                errorToast('Request timeout. Please check your connection and try again.');
            } else {
                errorToast('Network error. Please check your internet connection.');
            }
            
            return Promise.reject({
                ...error,
                message: 'Network error. Please check your internet connection.',
                isNetworkError: true
            });

        } else {
            // Error in request setup
            errorToast('An unexpected error occurred. Please try again.');
            return Promise.reject({
                ...error,
                message: error.message || 'An unexpected error occurred.'
            });
        }
    }
);

export default api;