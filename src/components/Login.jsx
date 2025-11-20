import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { getApiBaseUrl } from '../utils/api';

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f172a;
  padding: 1rem;
`;

const AuthCard = styled.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
  
  &:focus {
    outline: none;
    border-color: #10b981;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  text-align: center;
  margin: 1rem 0;
`;

const SuccessMessage = styled.div`
  color: #10b981;
  text-align: center;
  margin: 1rem 0;
`;

const SwitchText = styled.p`
  text-align: center;
  color: #94a3b8;
  margin-top: 1.5rem;
  
  button {
    background: none;
    border: none;
    color: #10b981;
    cursor: pointer;
    font-weight: 600;
  }
`;

const BackLink = styled(Link)`
  display: block;
  text-align: center;
  color: #94a3b8;
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    color: #10b981;
  }
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      // Call the real API
      const response = await fetch(`${getApiBaseUrl()}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess('Login successful!');
        
        // Store user data and token
        localStorage.setItem('userToken', data.token || 'fake-user-jwt-token');
        localStorage.setItem('userData', JSON.stringify(data.user));
        
        // Call the onLogin callback
        onLogin(data.user);
        
        // Redirect to home page after short delay
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <Title>Login to Your Account</Title>
        
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          
          <Button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        
        <SwitchText>
          Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button>
        </SwitchText>
        
        <BackLink to="/">← Back to Home</BackLink>
      </AuthCard>
    </AuthContainer>
  );
};

export default Login;