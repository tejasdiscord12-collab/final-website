import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getApiBaseUrl } from '../utils/api';

const SupportContainer = styled.div`
  padding: 5rem 5% 3rem;
  background: #0a0a0a;
  color: #f1f5f9;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #10b981;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SupportCard = styled.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  border: 1px solid #2a2a2a;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #10b981;
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
    color: #10b981;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`;

const CardDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ChatContainer = styled.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  border: 1px solid #2a2a2a;
  overflow: hidden;
  margin-top: 2rem;
`;

const ChatHeader = styled.div`
  background: #1e293b;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatTitle = styled.h2`
  font-size: 1.3rem;
  color: #10b981;
  margin: 0;
`;

const StatusIndicator = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.9rem;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
`;

const ChatMessages = styled.div`
  height: 400px;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 1rem;
  border-radius: 0.5rem;
  align-self: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  background: ${props => props.isOwn ? '#10b981' : '#2d2d2d'};
  color: ${props => props.isOwn ? '#000000' : '#f1f5f9'};
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const MessageContent = styled.div`
  line-height: 1.5;
`;

const ChatInputContainer = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #2a2a2a;
  background: #1e293b;
`;

const ChatForm = styled.form`
  display: flex;
  gap: 1rem;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0a0a0a;
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #10b981;
  }
`;

const SendButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  
  &:hover {
    background: #059669;
  }
  
  &:disabled {
    background: #334155;
    cursor: not-allowed;
  }
`;

const Support = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Load user data
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Load existing messages
  useEffect(() => {
    const loadMessages = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const response = await fetch(`${getApiBaseUrl()}/api/support/messages`, {
          headers: {
            'user-id': user.id
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setMessages(data.messages);
          }
        }
      } catch (error) {
        console.error('Error loading messages:', error);
        setError('Failed to load messages');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadMessages();
    }
  }, [user]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    try {
      const response = await fetch(`${getApiBaseUrl()}/api/support/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user.id,
          message: newMessage,
          userType: 'user'
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessages(prev => [...prev, data.message]);
          setNewMessage('');
        }
      } else {
        setError('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Network error. Failed to send message.');
    }
  };

  const supportOptions = [
    {
      title: "24/7 Live Chat",
      description: "Get instant help from our support team anytime, day or night.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Knowledge Base",
      description: "Browse our extensive library of help articles and tutorials.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <SupportContainer>
      <Container>
        <SectionTitle>24/7 Support</SectionTitle>
        <SectionSubtitle>
          We're here to help you with any questions or issues you might have
        </SectionSubtitle>

        {error && (
          <div style={{ 
            background: 'rgba(239, 68, 68, 0.1)', 
            border: '1px solid #ef4444', 
            color: '#ef4444', 
            padding: '1rem', 
            borderRadius: '0.375rem', 
            marginBottom: '1rem' 
          }}>
            {error}
          </div>
        )}

        <SupportGrid>
          {supportOptions.map((option, index) => (
            <SupportCard key={index}>
              <CardIcon>
                {option.icon}
              </CardIcon>
              <CardTitle>{option.title}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </SupportCard>
          ))}
        </SupportGrid>

        <ChatContainer>
          <ChatHeader>
            <ChatTitle>Live Chat with Support</ChatTitle>
            <StatusIndicator>
              <StatusDot />
              Online Now
            </StatusIndicator>
          </ChatHeader>
          
          <ChatMessages>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <Message key={msg.id} isOwn={msg.userType === 'user'}>
                  <MessageHeader>
                    <span>{msg.userType === 'admin' ? 'Support Agent' : 'You'}</span>
                    <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
                  </MessageHeader>
                  <MessageContent>{msg.message}</MessageContent>
                </Message>
              ))
            ) : (
              <div style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                {loading ? 'Loading messages...' : 'No messages yet. Start a conversation!'}
              </div>
            )}
          </ChatMessages>
          
          <ChatInputContainer>
            <ChatForm onSubmit={handleSendMessage}>
              <ChatInput
                type="text"
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value);
                  setError('');
                }}
                placeholder="Type your message here..."
                disabled={!user}
              />
              <SendButton 
                type="submit" 
                disabled={!newMessage.trim() || !user}
              >
                Send
              </SendButton>
            </ChatForm>
            {!user && (
              <p style={{ textAlign: 'center', color: '#f59e0b', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                Please log in to use the live chat feature
              </p>
            )}
          </ChatInputContainer>
        </ChatContainer>
      </Container>
    </SupportContainer>
  );
};

export default Support;