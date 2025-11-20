import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();
// Use Vercel's PORT or default to 4000
const PORT = process.env.PORT || 4000;

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? '*' 
    : '*',
  credentials: true
}));

// For normal JSON endpoints
app.use(express.json());

// In-memory storage for users (for testing purposes)
let users = [
  {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    password_hash: '$2b$10$rOzJqQZ8QxN8QxN8QxN8QeO7.8F5qF5qF5qF5qF5qF5qF5qF5qF5q', // 'password' hashed
    created_at: new Date()
  }
];

// In-memory storage for payment records
let paymentRecords = [];

// In-memory storage for messages
let messages = [];

// Helper function to generate unique IDs
const generateId = () => Math.floor(Math.random() * 1000000) + 1;

// Helper function to generate unique IDs for messages
const generateMessageId = () => Math.floor(Math.random() * 1000000) + 1;

// Helper function to get current timestamp
const getCurrentTimestamp = () => new Date().toISOString();

// Helper function to validate admin token (in a real app, you'd use JWT)
const validateAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token !== 'admin-secret-token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// User registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insert new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password_hash: hashedPassword,
      created_at: new Date()
    };
    
    users.push(newUser);
    
    res.status(201).json({
      success: true,
      user: {
        id: newUser.id,
        name,
        email,
        plan: 'Free',
        status: 'active'
      },
      token: 'fake-user-jwt-token'
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// User login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = users.find(user => user.email === email);
    
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        plan: 'Free',
        status: 'active'
      },
      token: 'fake-user-jwt-token'
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all users (admin only)
app.get('/api/admin/users', validateAdmin, async (req, res) => {
  try {
    // Add plan and status for frontend compatibility
    const usersWithDetails = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      plan: 'Free',
      status: 'active',
      servers: 0
    }));
    
    res.json(usersWithDetails);
  } catch (err) {
    console.error('Get users error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user (admin only)
app.put('/api/admin/users/:id', validateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, plan, status } = req.body;
    
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    users[userIndex].name = name || users[userIndex].name;
    users[userIndex].email = email || users[userIndex].email;
    
    res.json({ success: true, message: 'User updated successfully' });
  } catch (err) {
    console.error('Update user error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete user (admin only)
app.delete('/api/admin/users/:id', validateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    users.splice(userIndex, 1);
    
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (err) {
    console.error('Delete user error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add payment record endpoint
app.post('/api/payment/record', (req, res) => {
  const { userId, plan, amount, transactionId } = req.body;
  
  // Validate request
  if (!userId || !plan || !amount || !transactionId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Check if user already has a pending payment
  const existingPendingPayment = paymentRecords.find(record => 
    record.userId == userId && record.status === 'pending'
  );
  
  if (existingPendingPayment) {
    return res.status(400).json({ 
      error: 'You already have a pending payment. Please wait for admin confirmation or rejection.' 
    });
  }
  
  // Create payment record with pending status by default
  const paymentRecord = {
    id: generateId(),
    userId,
    plan,
    amount,
    transactionId,
    timestamp: getCurrentTimestamp(),
    status: 'pending',
    hiddenFromUser: false // Add hiddenFromUser property
  };
  
  // Store payment record
  paymentRecords.push(paymentRecord);
  
  res.json({ success: true, paymentRecord });
});

// Update payment status endpoint (for admin use)
app.put('/api/payment/status/:paymentId', (req, res) => {
  const { paymentId } = req.params;
  const { status } = req.body;
  
  // Validate request
  if (!status || !['pending', 'confirmed', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Must be pending, confirmed, or rejected.' });
  }
  
  // Find payment record
  const paymentIndex = paymentRecords.findIndex(record => record.id == paymentId);
  
  if (paymentIndex === -1) {
    return res.status(404).json({ error: 'Payment record not found' });
  }
  
  // Update status
  paymentRecords[paymentIndex].status = status;
  
  res.json({ success: true, paymentRecord: paymentRecords[paymentIndex] });
});

// Close chat endpoint (for admin use)
app.put('/api/messages/chat/:paymentId/close', (req, res) => {
  const { paymentId } = req.params;
  
  // Validate payment ID
  if (!paymentId) {
    return res.status(400).json({ error: 'Payment ID is required' });
  }
  
  // Find messages for this payment
  const paymentMessages = messages.filter(msg => msg.paymentId == paymentId);
  
  // Mark all messages as "chatClosed" = true
  paymentMessages.forEach(msg => {
    msg.chatClosed = true;
  });
  
  res.json({ success: true, message: 'Chat closed successfully' });
});

// Hide payment from user (for admin use)
app.put('/api/payment/:paymentId/hide', (req, res) => {
  const { paymentId } = req.params;
  
  // Validate payment ID
  if (!paymentId) {
    return res.status(400).json({ error: 'Payment ID is required' });
  }
  
  // Find payment record
  const paymentIndex = paymentRecords.findIndex(record => record.id == paymentId);
  
  if (paymentIndex === -1) {
    return res.status(404).json({ error: 'Payment record not found' });
  }
  
  // Mark payment as hidden from user
  paymentRecords[paymentIndex].hiddenFromUser = true;
  
  res.json({ success: true, message: 'Payment hidden from user successfully' });
});

// Get user payment history endpoint (updated to exclude hidden payments)
app.get('/api/payment/history/:userId', (req, res) => {
  const { userId } = req.params;
  
  // Validate user ID
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  
  // Filter payment records for this user, excluding hidden payments
  const userPayments = paymentRecords.filter(record => 
    record.userId == userId && !record.hiddenFromUser
  );
  
  res.json({ success: true, payments: userPayments });
});

// Get all payment records endpoint (for admin use)
app.get('/api/payment/history', (req, res) => {
  // In a real app, you would validate admin token here
  // For now, we'll just return all payment records
  
  res.json({ success: true, payments: paymentRecords });
});

// Send message endpoint
app.post('/api/messages', (req, res) => {
  const { userId, paymentId, message, userType } = req.body;
  
  // Validate request
  if (!userId || !message || !userType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Create message
  const newMessage = {
    id: generateMessageId(),
    userId,
    paymentId: paymentId || null,
    message,
    userType, // 'user' or 'admin'
    timestamp: getCurrentTimestamp(),
    read: false,
    chatClosed: false // Add chatClosed property
  };
  
  // Store message
  messages.push(newMessage);
  
  res.json({ success: true, message: newMessage });
});

// Get messages for a payment endpoint (updated to exclude closed chats for users)
app.get('/api/messages/payment/:paymentId', (req, res) => {
  const { paymentId } = req.params;
  const userType = req.headers['user-type'] || 'user';
  
  // Validate payment ID
  if (!paymentId) {
    return res.status(400).json({ error: 'Payment ID is required' });
  }
  
  // Filter messages for this payment
  let paymentMessages = messages.filter(msg => msg.paymentId == paymentId);
  
  // For users, exclude messages if chat is closed
  if (userType === 'user') {
    const hasClosedChat = paymentMessages.some(msg => msg.chatClosed);
    if (hasClosedChat) {
      return res.json({ success: true, messages: [], chatClosed: true });
    }
  }
  
  // Mark messages as read for the requesting user type
  paymentMessages.forEach(msg => {
    if (msg.userType !== userType) {
      msg.read = true;
    }
  });
  
  res.json({ success: true, messages: paymentMessages, chatClosed: false });
});

// Get all messages endpoint (for admin use)
app.get('/api/messages', (req, res) => {
  // In a real app, you would validate admin token here
  // For now, we'll just return all messages
  
  res.json({ success: true, messages });
});

// Update message read status endpoint
app.put('/api/messages/:messageId/read', (req, res) => {
  const { messageId } = req.params;
  
  // Find message
  const messageIndex = messages.findIndex(msg => msg.id == messageId);
  
  if (messageIndex === -1) {
    return res.status(404).json({ error: 'Message not found' });
  }
  
  // Update read status
  messages[messageIndex].read = true;
  
  res.json({ success: true, message: messages[messageIndex] });
});

// Export the app for Vercel
export default app;

// Only start the server if this file is run directly (not imported)
// This check is important for Vercel
if (import.meta.url === new URL(import.meta.url).href) {
  const server = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  
  // Handle graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
      console.log('Process terminated');
    });
  });
}
