import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 2rem;
`;

const HistoryCard = styled.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #334155;
`;

const Title = styled.h2`
  color: #00ff9d;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const BackButton = styled.button`
  background: #0f172a;
  color: #cbd5e1;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  
  &:hover {
    background: #1e293b;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  background: #0f172a;
  color: #00ff9d;
  text-align: left;
  padding: 1rem;
  border: 1px solid #334155;
`;

const Td = styled.td`
  padding: 1rem;
  border: 1px solid #334155;
  color: #cbd5e1;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background: #1e293b;
  }
  
  &:nth-child(odd) {
    background: #0f172a;
  }
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  
  &.confirmed {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
  }
  
  &.pending {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
  }
  
  &.rejected {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }
`;

const DownloadButton = styled.button`
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

const NoRecords = styled.div`
  text-align: center;
  color: #94a3b8;
  padding: 2rem;
`;

// New styled components for messaging
const MessageButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 0.5rem;
  
  &:hover {
    background: #2563eb;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #334155;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  color: #94a3b8;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: #cbd5e1;
  }
`;

const MessageList = styled.div`
  margin: 1rem 0;
  max-height: 300px;
  overflow-y: auto;
`;

const MessageItem = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background: ${props => props.isOwn ? '#0f172a' : '#334155'};
  border-left: 3px solid ${props => props.isOwn ? '#10b981' : '#3b82f6'};
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #94a3b8;
`;

const MessageText = styled.div`
  color: #cbd5e1;
`;

const MessageForm = styled.form`
  display: flex;
  margin-top: 1rem;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  color: white;
`;

const SendButton = styled.button`
  background: #10b981;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  
  &:hover {
    background: #059669;
  }
`;

const PaymentHistory = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messagesLoading, setMessagesLoading] = useState(false);

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Fetch payment history
      fetchPaymentHistory(parsedUser.id);
    } else {
      // Redirect to login if no user data
      navigate('/login');
    }
  }, [navigate]);

  const fetchPaymentHistory = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/payment/history/${userId}`);
      const data = await response.json();
      
      if (data.success) {
        // Show both pending and confirmed payments
        const visiblePayments = data.payments.filter(payment => 
          payment.status === 'pending' || payment.status === 'confirmed'
        );
        setPayments(visiblePayments);
      }
    } catch (error) {
      console.error('Error fetching payment history:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (paymentId) => {
    setMessagesLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/api/messages/payment/${paymentId}`, {
        headers: {
          'user-type': 'user'
        }
      });
      const data = await response.json();
      
      if (data.success) {
        if (data.chatClosed) {
          setMessages([]);
          // Show a message that the chat is closed
          alert('This chat has been closed by the admin. Please contact support if you need further assistance.');
        } else {
          setMessages(data.messages);
        }
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setMessagesLoading(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    try {
      const response = await fetch('http://localhost:4000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user.id,
          paymentId: selectedPayment.id,
          message: newMessage,
          userType: 'user'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Add new message to the list
        setMessages([...messages, data.message]);
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const openMessageModal = async (payment) => {
    setSelectedPayment(payment);
    setShowMessageModal(true);
    await fetchMessages(payment.id);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const downloadReceipt = (payment) => {
    // Create receipt content
    const receiptContent = `
Minecraft Server Hosting Receipt
================================

Transaction ID: ${payment.transactionId}
Date: ${formatDate(payment.timestamp)}
Plan: ${payment.plan}
Amount: $${payment.amount}

Customer Information:
Name: ${user?.name}
Email: ${user?.email}

Thank you for your purchase!
    `.trim();

    // Create and download file
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${payment.transactionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <HistoryContainer>
        <HistoryCard>
          <Title>Payment History</Title>
          <div style={{ textAlign: 'center', color: '#cbd5e1' }}>Loading...</div>
        </HistoryCard>
      </HistoryContainer>
    );
  }

  return (
    <HistoryContainer>
      <HistoryCard>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        <Title>Payment History</Title>
        
        {payments.length === 0 ? (
          <NoRecords>No payments found.</NoRecords>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>Transaction ID</Th>
                <Th>Date</Th>
                <Th>Plan</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <Tr key={payment.id}>
                  <Td>{payment.transactionId}</Td>
                  <Td>{formatDate(payment.timestamp)}</Td>
                  <Td>{payment.plan}</Td>
                  <Td>${payment.amount}</Td>
                  <Td>
                    <StatusBadge className={payment.status}>
                      {payment.status}
                    </StatusBadge>
                  </Td>
                  <Td>
                    {payment.status === 'confirmed' ? (
                      <MessageButton onClick={() => openMessageModal(payment)}>
                        View Chat
                      </MessageButton>
                    ) : (
                      <>
                        <DownloadButton onClick={() => downloadReceipt(payment)}>
                          Download Receipt
                        </DownloadButton>
                        <MessageButton onClick={() => openMessageModal(payment)}>
                          Message Admin
                        </MessageButton>
                      </>
                    )}
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        )}
      </HistoryCard>

      {/* Message Modal */}
      {showMessageModal && selectedPayment && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowMessageModal(false)}>&times;</CloseButton>
            <h3>Messages for Payment {selectedPayment.transactionId}</h3>
            
            {messagesLoading ? (
              <div style={{ textAlign: 'center', color: '#cbd5e1', padding: '2rem' }}>
                Loading messages...
              </div>
            ) : (
              <>
                <MessageList>
                  {messages.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#94a3b8', padding: '1rem' }}>
                      No messages yet. Start a conversation with the admin.
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <MessageItem key={msg.id} isOwn={msg.userType === 'user'}>
                        <MessageHeader>
                          <span>{msg.userType === 'user' ? 'You' : 'Admin'}</span>
                          <span>{formatDate(msg.timestamp)}</span>
                        </MessageHeader>
                        <MessageText>{msg.message}</MessageText>
                      </MessageItem>
                    ))
                  )}
                </MessageList>
                
                <MessageForm onSubmit={sendMessage}>
                  <MessageInput
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message to admin..."
                  />
                  <SendButton type="submit">Send</SendButton>
                </MessageForm>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </HistoryContainer>
  );
};

export default PaymentHistory;