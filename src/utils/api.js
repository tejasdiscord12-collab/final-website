// Determine API base URL based on environment
export const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // In browser environment
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:4000';
    } else {
      // For production deployments on Vercel, the API routes are served from the same domain
      return '';
    }
  }
  return 'http://localhost:4000'; // Default for server-side
};