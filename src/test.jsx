import React from 'react';

const Test = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      background: '#0f172a', 
      color: '#ffffff', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#00ff9d', fontSize: '3rem', marginBottom: '1rem' }}>
        Test Page
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#cbd5e1', marginBottom: '2rem' }}>
        If you can see this, the React app is working!
      </p>
      <div style={{ 
        background: '#1e293b', 
        padding: '2rem', 
        borderRadius: '0.5rem',
        border: '1px solid #334155'
      }}>
        <h2 style={{ color: '#00ffff', marginBottom: '1rem' }}>Server Locations</h2>
        <ul style={{ textAlign: 'left', color: '#e2e8f0' }}>
          <li>India - 12ms</li>
          <li>USA - 8ms</li>
          <li>Germany - 25ms</li>
          <li>Singapore - 5ms</li>
        </ul>
      </div>
    </div>
  );
};

export default Test;