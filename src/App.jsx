import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Network from './components/Network';
import Console from './components/Console';
import Footer from './components/Footer';
import About from './components/About';
import Support from './components/Support';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Test from './test';
import BillingPage from './components/BillingPage';
import Payout from './components/Payout';
import PaymentHistory from './components/PaymentHistory';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Header isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
            <Hero />
            <Features />
            <Network />
            <Console />
            <Testimonials />
            <Footer />
          </>
        } />
        <Route path="/pricing" element={
          <>
            <Header isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
            <Pricing />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Header isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
            <About />
            <Footer />
          </>
        } />
        <Route path="/support" element={
          <>
            <Header isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
            <Support />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;