import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #1e293b;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  text-decoration: none;
  
  span {
    color: white;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
`;

const MenuLink = styled(Link)`
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled(Link)`
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
`;

const LoginButton = styled(Button)`
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  
  &:hover {
    background: rgba(16, 185, 129, 0.1);
  }
`;

const SignupButton = styled(Button)`
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const UserName = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  color: #cbd5e1;
  border: 1px solid #334155;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #10b981;
    border-color: #10b981;
  }
`;

const AdminButton = styled(Link)`
  background: #8b5cf6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
  }
`;

const DashboardButton = styled(Link)`
  background: #00ff9d;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #00e68a;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.3);
  }
`;

const PaymentsButton = styled(Link)`
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }
`;

const Header = ({ isAuthenticated, user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <Nav>
      <Container>
        <Logo to="/">Nexter<span>Cloud</span></Logo>
        
        <Menu>
          <MenuItem><MenuLink to="/">Home</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/#features">Features</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/pricing">Pricing</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/support">Support</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/about">About</MenuLink></MenuItem>
        </Menu>
        
        {isAuthenticated && user ? (
          <UserMenu>
            <UserName>Welcome, {user.name}</UserName>
            <PaymentsButton to="/payment-history">My Payments</PaymentsButton>
            <DashboardButton to="/dashboard">Dashboard</DashboardButton>
            <LogoutButton onClick={onLogout}>Logout</LogoutButton>
            <AdminButton to="/admin/login">Admin</AdminButton>
          </UserMenu>
        ) : (
          <AuthButtons>
            <LoginButton to="/login">Login</LoginButton>
            <SignupButton to="/signup">Sign Up</SignupButton>
            <AdminButton to="/admin/login">Admin</AdminButton>
          </AuthButtons>
        )}
      </Container>
    </Nav>
  );
};

export default Header;