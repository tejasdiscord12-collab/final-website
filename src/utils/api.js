// Determine API base URL based on environment
export const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // In browser environment
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:4000';
    } else {
      // For production deployments, you might want to use a different approach
      // For now, we'll assume the backend is at the same domain but different port
      // In a real deployment, you might use an environment variable or a dedicated API domain
      return window.location.origin.replace('3000', '4000') || 'http://localhost:4000';
    }
  }
  return 'http://localhost:4000'; // Default for server-side
};