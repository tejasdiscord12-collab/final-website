import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApiBaseUrl } from '../utils/api';

const Payout = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [paymentFailed, setPaymentFailed] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setPaymentFailed(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time for display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePaymentConfirmation = async () => {
    setProcessing(true);
    
    try {
      // Get user data from localStorage
      const userData = JSON.parse(localStorage.getItem('userData'));
      
      if (!userData) {
        alert('User not found. Please log in again.');
        navigate('/login');
        return;
      }
      
      // Generate a transaction ID
      const transactionId = 'TXN-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
      
      // Record the payment
      const response = await fetch(`${getApiBaseUrl()}/api/payment/record`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userData.id,
          plan: 'Starter', // Default plan, you might want to get this from context
          amount: 5, // Default amount, you might want to get this from context
          transactionId: transactionId
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Redirect to payment history page
        navigate('/payment-history');
      } else {
        // Show error message
        alert(data.error || 'Error recording payment. Please contact support.');
      }
    } catch (error) {
      console.error('Error recording payment:', error);
      alert('Network error. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div style={{ padding: '5rem 2rem', background: '#000000', color: 'white', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#111827', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #334155', textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#10b981' }}>Complete Your Payment</h2>
        
        {paymentFailed ? (
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', padding: '1rem', borderRadius: '0.375rem', marginBottom: '1rem' }}>
            <h3>Payment Failed</h3>
            <p>Payment was not completed within the 5-minute time limit. Please try again.</p>
            <button 
              onClick={() => {
                setPaymentFailed(false);
                setTimeLeft(5 * 60);
              }}
              style={{ 
                padding: '0.5rem 1rem', 
                background: '#ef4444', 
                color: 'white', 
                border: 'none', 
                borderRadius: '0.375rem', 
                fontSize: '1rem', 
                fontWeight: '600', 
                cursor: 'pointer', 
                marginTop: '1rem'
              }}
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <p>Scan the QR code below with your payment app to complete the transaction</p>
            <p style={{ color: '#f59e0b', fontWeight: 'bold', marginTop: '1rem' }}>
              Time remaining: {formatTime(timeLeft)}
            </p>
            
            {/* QR Code Display Area - Now uses admin-set QR code */}
            <div style={{ width: '300px', height: '300px', background: '#1e293b', border: '2px dashed #334155', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem auto', color: '#94a3b8', fontSize: '1.2rem' }}>
              {(() => {
                const adminQRCode = localStorage.getItem('adminQRCode');
                if (adminQRCode) {
                  return (
                    <img 
                      src={adminQRCode} 
                      alt="Payment QR Code" 
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                    />
                  );
                }
                return 'QR Code Will Be Placed Here by Admin';
              })()}
            </div>
            
            <p>After completing the payment, your service will be activated shortly.</p>
          </>
        )}
        
        {!paymentFailed && (
          <button 
            onClick={handlePaymentConfirmation}
            disabled={processing}
            style={{ 
              padding: '1rem 2rem', 
              background: 'linear-gradient(90deg, #10b981, #059669)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '0.375rem', 
              fontSize: '1rem', 
              fontWeight: '600', 
              cursor: processing ? 'not-allowed' : 'pointer', 
              transition: 'all 0.3s ease', 
              marginTop: '1rem',
              opacity: processing ? 0.7 : 1
            }}
          >
            {processing ? 'Processing...' : 'I Have Completed Payment'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Payout;