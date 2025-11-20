import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getApiBaseUrl } from '../utils/api';

const DashboardContainer = styled.div`
  background: #0f172a;
  color: white;
  min-height: 100vh;
`;

const Header = styled.header`
  background: #1e293b;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  
  span {
    color: white;
  }
`;

const TabContainer = styled.nav`
  display: flex;
  gap: 1rem;
`;

const TabButton = styled.button`
  background: transparent;
  color: #94a3b8;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  
  &:hover, &.active {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
  }
`;

const LogoutButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background: #dc2626;
  }
`;

const MainContent = styled.main`
  padding: 2rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #334155;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const StatLabel = styled.div`
  color: #94a3b8;
`;

const SectionTitle = styled.h2`
  margin: 2rem 0 1rem;
  color: #10b981;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #1e293b;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const TableHead = styled.thead`
  background: #334155;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #334155;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  color: #94a3b8;
`;

const TableCell = styled.td`
  padding: 1rem;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  
  &.active {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
  }
  
  &.inactive {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }
  
  &.suspended {
    background: rgba(156, 163, 175, 0.2);
    color: #9ca3af;
  }
  
  &.pending {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin: 0 0.25rem;
  
  &.edit {
    background: #3b82f6;
    color: white;
  }
  
  &.delete {
    background: #ef4444;
    color: white;
  }
  
  &.suspend {
    background: #f59e0b;
    color: white;
  }
  
  &.activate {
    background: #10b981;
    color: white;
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #94a3b8;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1e293b;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 500px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #cbd5e1;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
`;

const Select = styled.select`
  padding: 0.8rem;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
`;

const Button = styled.button`
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

// Add new styled components for payments
const PaymentStatusBadge = styled(StatusBadge)`
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

const PaymentActionButton = styled(ActionButton)`
  &.confirm {
    background: #10b981;
    color: white;
  }
  
  &.reject {
    background: #ef4444;
    color: white;
  }
`;

// Add new styled components for messaging
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

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeServers: 0,
    systemStatus: 'All Systems Operational'
  });
  const [users, setUsers] = useState([]);
  const [servers, setServers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    plan: 'Free',
    status: 'active'
  });
  // New state for messaging
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedPaymentForMessaging, setSelectedPaymentForMessaging] = useState(null);
  const [paymentMessages, setPaymentMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messagesLoading, setMessagesLoading] = useState(false);
  const navigate = useNavigate();

  // Check if admin is authenticated
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    } else {
      // Load real data from backend
      loadData();
    }
  }, [navigate]);

  // Load real data from backend
  const loadData = async () => {
    try {
      setLoading(true);
      
      // Fetch users from backend
      const usersResponse = await fetch(`${getApiBaseUrl()}/api/admin/users`, {
        headers: {
          'Authorization': 'admin-secret-token'
        }
      });
      
      if (usersResponse.ok) {
        const usersData = await usersResponse.json();
        setUsers(usersData);
        
        // Update stats
        setStats(prevStats => ({
          ...prevStats,
          totalUsers: usersData.length
        }));
      }
      
      // Fetch payments from backend
      const paymentsResponse = await fetch(`${getApiBaseUrl()}/api/payment/history`, {
        headers: {
          'Authorization': 'admin-secret-token'
        }
      });
      
      if (paymentsResponse.ok) {
        const paymentsData = await paymentsResponse.json();
        setPayments(paymentsData.payments || []);
      }
      
      // Fetch messages from backend
      const messagesResponse = await fetch(`${getApiBaseUrl()}/api/messages`, {
        headers: {
          'Authorization': 'admin-secret-token'
        }
      });
      
      if (messagesResponse.ok) {
        const messagesData = await messagesResponse.json();
        setMessages(messagesData.messages || []);
      }
      
      // Mock servers data (in a real app, you would fetch this from the backend too)
      setServers([
        { id: 1, name: 'Survival Server', user: 'John Doe', status: 'online', cpu: '45%', ram: '2.1GB', players: '12/20' },
        { id: 2, name: 'Creative World', user: 'Jane Smith', status: 'online', cpu: '22%', ram: '1.5GB', players: '3/10' },
        { id: 3, name: 'Skyblock Realm', user: 'Bob Johnson', status: 'offline', cpu: '0%', ram: '0GB', players: '0/15' },
        { id: 4, name: 'PvP Arena', user: 'Alice Brown', status: 'online', cpu: '68%', ram: '3.2GB', players: '18/20' }
      ]);
      
      // Update stats
      setStats(prevStats => ({
        ...prevStats,
        activeServers: 4,
        systemStatus: 'All Systems Operational'
      }));
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditForm({
      name: user.name,
      email: user.email,
      plan: user.plan,
      status: user.status
    });
    setShowEditModal(true);
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/admin/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': 'admin-secret-token'
          }
        });
        
        if (response.ok) {
          // Remove user from users state
          const updatedUsers = users.filter(user => user.id !== userId);
          setUsers(updatedUsers);
          
          // Update stats
          setStats(prevStats => ({
            ...prevStats,
            totalUsers: updatedUsers.length
          }));
        } else {
          alert('Failed to delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      }
    }
  };

  const handleSuspendUser = (userId) => {
    // In a real app, you would update the user status in the backend
    // For now, we'll just update the UI
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, status: 'suspended' };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleActivateUser = (userId) => {
    // In a real app, you would update the user status in the backend
    // For now, we'll just update the UI
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, status: 'active' };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/admin/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'admin-secret-token'
        },
        body: JSON.stringify(editForm),
      });
      
      if (response.ok) {
        // Update user in users state
        const updatedUsers = users.map(user => {
          if (user.id === selectedUser.id) {
            return {
              ...user,
              name: editForm.name,
              email: editForm.email,
              plan: editForm.plan,
              status: editForm.status
            };
          }
          return user;
        });
        setUsers(updatedUsers);
        
        // Close modal
        setShowEditModal(false);
        setSelectedUser(null);
      } else {
        alert('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };

  // Add function to fetch payments
  const fetchPayments = async () => {
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/payment/history`, {
        headers: {
          'Authorization': 'admin-secret-token'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setPayments(data.payments || []);
      }
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  // Add function to update payment status
  const updatePaymentStatus = async (paymentId, status) => {
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/payment/status/${paymentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'admin-secret-token'
        },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        const data = await response.json();
        // Update payment in state
        const updatedPayments = payments.map(payment => 
          payment.id === paymentId ? data.paymentRecord : payment
        );
        setPayments(updatedPayments);
      } else {
        alert('Failed to update payment status');
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
      alert('Failed to update payment status');
    }
  };

  // Add function to fetch messages
  const fetchMessages = async () => {
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/messages`, {
        headers: {
          'Authorization': 'admin-secret-token'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages || []);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Add function to fetch messages for a specific payment
  const fetchPaymentMessages = async (paymentId) => {
    setMessagesLoading(true);
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/messages/payment/${paymentId}`, {
        headers: {
          'Authorization': 'admin-secret-token',
          'user-type': 'admin'
        }
      });
      const data = await response.json();
      
      if (data.success) {
        setPaymentMessages(data.messages);
      } else {
        console.error('Failed to fetch payment messages:', data.error);
      }
    } catch (error) {
      console.error('Error fetching payment messages:', error);
    } finally {
      setMessagesLoading(false);
    }
  };

  // Add function to send message
  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !selectedPaymentForMessaging) return;
    
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'admin-secret-token'
        },
        body: JSON.stringify({
          userId: selectedPaymentForMessaging.userId,
          paymentId: selectedPaymentForMessaging.id,
          message: newMessage,
          userType: 'admin'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Add new message to the list
        setPaymentMessages([...paymentMessages, data.message]);
        setNewMessage('');
        
        // Update messages list
        fetchMessages();
      } else {
        console.error('Failed to send message:', data.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Add function to open message modal
  const openMessageModal = async (payment) => {
    console.log('Opening message modal for payment:', payment);
    setSelectedPaymentForMessaging(payment);
    setShowMessageModal(true);
    await fetchPaymentMessages(payment.id);
  };

  // Add function to close chat
  const closeChat = async (paymentId) => {
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/messages/chat/${paymentId}/close`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'admin-secret-token'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Refresh messages
        fetchMessages();
        // Close the message modal
        setShowMessageModal(false);
        setSelectedPaymentForMessaging(null);
        alert('Chat closed successfully');
      } else {
        console.error('Failed to close chat:', data.error);
        alert('Failed to close chat');
      }
    } catch (error) {
      console.error('Error closing chat:', error);
      alert('Error closing chat');
    }
  };

  // Add function to hide payment from user
  const hidePaymentFromUser = async (paymentId) => {
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/payment/${paymentId}/hide`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'admin-secret-token'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Refresh payments
        loadData();
        alert('Payment hidden from user successfully');
      } else {
        console.error('Failed to hide payment:', data.error);
        alert('Failed to hide payment');
      }
    } catch (error) {
      console.error('Error hiding payment:', error);
      alert('Error hiding payment');
    }
  };

  return (
    <DashboardContainer>
      <Header>
        <Logo>Nexter<span>Cloud</span> Admin</Logo>
        <TabContainer>
          <TabButton 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </TabButton>
          <TabButton 
            active={activeTab === 'users'} 
            onClick={() => setActiveTab('users')}
          >
            Users
          </TabButton>
          <TabButton 
            active={activeTab === 'servers'} 
            onClick={() => setActiveTab('servers')}
          >
            Servers
          </TabButton>
          <TabButton 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </TabButton>
          <TabButton 
            active={activeTab === 'payments'} 
            onClick={() => setActiveTab('payments')}
          >
            Payments
          </TabButton>
          <TabButton 
            active={activeTab === 'messages'} 
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </TabButton>
        </TabContainer>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>

      <MainContent>
        {loading ? (
          <LoadingMessage>Loading dashboard data...</LoadingMessage>
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <>
                <StatsContainer>
                  <StatCard>
                    <StatValue>{stats.totalUsers}</StatValue>
                    <StatLabel>Total Users</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>{stats.activeServers}</StatValue>
                    <StatLabel>Active Servers</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>{stats.pendingPayments}</StatValue>
                    <StatLabel>Pending Payments</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>
                      <StatusBadge className="active">{stats.systemStatus}</StatusBadge>
                    </StatValue>
                    <StatLabel>System Status</StatLabel>
                  </StatCard>
                </StatsContainer>

                <SectionTitle>Recent Activity</SectionTitle>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeader>User</TableHeader>
                      <TableHeader>Action</TableHeader>
                      <TableHeader>Server</TableHeader>
                      <TableHeader>Time</TableHeader>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>Started server</TableCell>
                      <TableCell>Survival Server</TableCell>
                      <TableCell>2 hours ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>Created server</TableCell>
                      <TableCell>Creative World</TableCell>
                      <TableCell>5 hours ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Alice Brown</TableCell>
                      <TableCell>Stopped server</TableCell>
                      <TableCell>SkyBlock Realm</TableCell>
                      <TableCell>1 day ago</TableCell>
                    </TableRow>
                  </tbody>
                </Table>
              </>
            )}

            {activeTab === 'users' && (
              <>
                <SectionTitle>User Management</SectionTitle>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeader>ID</TableHeader>
                      <TableHeader>Name</TableHeader>
                      <TableHeader>Email</TableHeader>
                      <TableHeader>Plan</TableHeader>
                      <TableHeader>Status</TableHeader>
                      <TableHeader>Servers</TableHeader>
                      <TableHeader>Actions</TableHeader>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    {users.length > 0 ? (
                      users.map(user => (
                        <TableRow key={user.id}>
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.plan}</TableCell>
                          <TableCell>
                            <StatusBadge className={user.status}>
                              {user.status}
                            </StatusBadge>
                          </TableCell>
                          <TableCell>{user.servers}</TableCell>
                          <TableCell>
                            <ActionButton 
                              className="edit" 
                              onClick={() => handleEditUser(user)}
                            >
                              Edit
                            </ActionButton>
                            {user.status === 'suspended' ? (
                              <ActionButton 
                                className="activate" 
                                onClick={() => handleActivateUser(user.id)}
                              >
                                Activate
                              </ActionButton>
                            ) : (
                              <ActionButton 
                                className="suspend" 
                                onClick={() => handleSuspendUser(user.id)}
                              >
                                Suspend
                              </ActionButton>
                            )}
                            <ActionButton 
                              className="delete" 
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              Delete
                            </ActionButton>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan="7" style={{ textAlign: 'center' }}>
                          No users found
                        </TableCell>
                      </TableRow>
                    )}
                  </tbody>
                </Table>
              </>
            )}

            {activeTab === 'servers' && (
              <>
                <SectionTitle>Server Management</SectionTitle>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeader>ID</TableHeader>
                      <TableHeader>Name</TableHeader>
                      <TableHeader>User</TableHeader>
                      <TableHeader>Status</TableHeader>
                      <TableHeader>CPU</TableHeader>
                      <TableHeader>RAM</TableHeader>
                      <TableHeader>Players</TableHeader>
                      <TableHeader>Actions</TableHeader>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    {servers.length > 0 ? (
                      servers.map(server => (
                        <TableRow key={server.id}>
                          <TableCell>{server.id}</TableCell>
                          <TableCell>{server.name}</TableCell>
                          <TableCell>{server.user}</TableCell>
                          <TableCell>
                            <StatusBadge className={server.status === 'online' ? 'active' : 'inactive'}>
                              {server.status}
                            </StatusBadge>
                          </TableCell>
                          <TableCell>{server.cpu}</TableCell>
                          <TableCell>{server.ram}</TableCell>
                          <TableCell>{server.players}</TableCell>
                          <TableCell>
                            <ActionButton className="edit">Start</ActionButton>
                            <ActionButton className="suspend">Stop</ActionButton>
                            <ActionButton className="delete">Delete</ActionButton>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan="8" style={{ textAlign: 'center' }}>
                          No servers found
                        </TableCell>
                      </TableRow>
                    )}
                  </tbody>
                </Table>
              </>
            )}

            {activeTab === 'payments' && (
              <>
                <SectionTitle>Payment Management</SectionTitle>
                {loading ? (
                  <LoadingMessage>Loading payments...</LoadingMessage>
                ) : (
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeader>Transaction ID</TableHeader>
                        <TableHeader>User</TableHeader>
                        <TableHeader>Plan</TableHeader>
                        <TableHeader>Amount</TableHeader>
                        <TableHeader>Date</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Actions</TableHeader>
                      </TableRow>
                    </TableHead>
                    <tbody>
                      {payments.map(payment => (
                        <TableRow key={payment.id}>
                          <TableCell>{payment.transactionId}</TableCell>
                          <TableCell>{payment.userId}</TableCell>
                          <TableCell>{payment.plan}</TableCell>
                          <TableCell>${payment.amount}</TableCell>
                          <TableCell>{new Date(payment.timestamp).toLocaleString()}</TableCell>
                          <TableCell>
                            <PaymentStatusBadge className={payment.status}>
                              {payment.status}
                            </PaymentStatusBadge>
                          </TableCell>
                          <TableCell>
                            {payment.status === 'pending' && (
                              <>
                                <PaymentActionButton 
                                  className="confirm"
                                  onClick={() => updatePaymentStatus(payment.id, 'confirmed')}
                                >
                                  Confirm
                                </PaymentActionButton>
                                <PaymentActionButton 
                                  className="reject"
                                  onClick={() => updatePaymentStatus(payment.id, 'rejected')}
                                >
                                  Reject
                                </PaymentActionButton>
                              </>
                            )}
                            <PaymentActionButton 
                              className="edit"
                              onClick={() => openMessageModal(payment)}
                              style={{ marginLeft: '0.5rem' }}
                            >
                              Message User
                            </PaymentActionButton>
                            {(payment.status === 'confirmed' || payment.status === 'rejected') && (
                              <PaymentActionButton 
                                className="delete"
                                onClick={() => hidePaymentFromUser(payment.id)}
                                style={{ marginLeft: '0.5rem' }}
                              >
                                Hide Payment
                              </PaymentActionButton>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </tbody>
                  </Table>
                )}
              </>
            )}

            {activeTab === 'messages' && (
              <>
                <SectionTitle>Messages</SectionTitle>
                {loading ? (
                  <LoadingMessage>Loading messages...</LoadingMessage>
                ) : (
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeader>Payment ID</TableHeader>
                        <TableHeader>User ID</TableHeader>
                        <TableHeader>Message</TableHeader>
                        <TableHeader>Date</TableHeader>
                        <TableHeader>Status</TableHeader>
                      </TableRow>
                    </TableHead>
                    <tbody>
                      {messages
                        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                        .map(message => (
                          <TableRow key={message.id}>
                            <TableCell>{message.paymentId || 'N/A'}</TableCell>
                            <TableCell>{message.userId}</TableCell>
                            <TableCell>{message.message}</TableCell>
                            <TableCell>{new Date(message.timestamp).toLocaleString()}</TableCell>
                            <TableCell>
                              <PaymentStatusBadge className={message.read ? 'confirmed' : 'pending'}>
                                {message.read ? 'Read' : 'Unread'}
                              </PaymentStatusBadge>
                            </TableCell>
                          </TableRow>
                        ))}
                    </tbody>
                  </Table>
                )}
              </>
            )}

            {activeTab === 'settings' && (
              <>
                <SectionTitle>System Settings</SectionTitle>
                <StatCard>
                  <h3>Platform Configuration</h3>
                  <p>Manage hosting plans, resource limits, and platform settings.</p>
                  <ActionButton className="edit" style={{ marginTop: '1rem' }}>
                    Configure Plans
                  </ActionButton>
                </StatCard>
                
                <SectionTitle style={{ marginTop: '2rem' }}>System Monitoring</SectionTitle>
                <StatsContainer>
                  <StatCard>
                    <StatValue>99.8%</StatValue>
                    <StatLabel>Uptime</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>4.2 TB</StatValue>
                    <StatLabel>Disk Usage</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>68%</StatValue>
                    <StatLabel>Server Load</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>24/7</StatValue>
                    <StatLabel>Support Status</StatLabel>
                  </StatCard>
                </StatsContainer>
                
                {/* QR Code Management Section */}
                <SectionTitle style={{ marginTop: '2rem' }}>Payment QR Code</SectionTitle>
                <StatCard>
                  <h3>Upload Payment QR Code</h3>
                  <p>Upload the QR code that users will see on the payout page.</p>
                  <div style={{ margin: '1rem 0' }}>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            // In a real app, you would save this to a database
                            // For now, we'll save it to localStorage
                            localStorage.setItem('adminQRCode', event.target.result);
                            alert('QR Code uploaded and saved successfully!');
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      style={{ 
                        padding: '0.5rem', 
                        background: '#0f172a', 
                        border: '1px solid #334155', 
                        borderRadius: '0.375rem', 
                        color: 'white',
                        width: '100%',
                        marginBottom: '1rem'
                      }}
                    />
                  </div>
                  <p>Current QR Code:</p>
                  <div style={{ 
                    width: '200px', 
                    height: '200px', 
                    margin: '1rem auto', 
                    border: '1px dashed #334155', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: '#0f172a'
                  }}>
                    {(() => {
                      const savedQR = localStorage.getItem('adminQRCode');
                      if (savedQR) {
                        return <img src={savedQR} alt="Current Payment QR Code" style={{ maxWidth: '100%', maxHeight: '100%' }} />;
                      }
                      return <span style={{ color: '#94a3b8' }}>No QR Code Set</span>;
                    })()}
                  </div>
                </StatCard>
              </>
            )}
          </>
        )}
      </MainContent>

      {/* Edit User Modal */}
      {showEditModal && selectedUser && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowEditModal(false)}>&times;</CloseButton>
            <h2>Edit User</h2>
            <Form onSubmit={handleEditFormSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditFormChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleEditFormChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="plan">Plan</Label>
                <Select
                  id="plan"
                  name="plan"
                  value={editForm.plan}
                  onChange={handleEditFormChange}
                  required
                >
                  <option value="Free">Free</option>
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  id="status"
                  name="status"
                  value={editForm.status}
                  onChange={handleEditFormChange}
                  required
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </Select>
              </div>
              <Button type="submit">Update User</Button>
            </Form>
          </ModalContent>
        </Modal>
      )}

      {/* Message Modal */}
      {showMessageModal && selectedPaymentForMessaging && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowMessageModal(false)}>&times;</CloseButton>
            <h3>Messages for Payment {selectedPaymentForMessaging.transactionId}</h3>
            
            {messagesLoading ? (
              <div style={{ textAlign: 'center', color: '#cbd5e1', padding: '2rem' }}>
                Loading messages...
              </div>
            ) : (
              <>
                <MessageList>
                  {paymentMessages.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#94a3b8', padding: '1rem' }}>
                      No messages yet.
                    </div>
                  ) : (
                    paymentMessages.map((msg) => (
                      <MessageItem key={msg.id} isOwn={msg.userType === 'admin'}>
                        <MessageHeader>
                          <span>{msg.userType === 'admin' ? 'You (Admin)' : 'User'}</span>
                          <span>{new Date(msg.timestamp).toLocaleString()}</span>
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
                    placeholder="Type your message to user..."
                  />
                  <SendButton type="submit">Send</SendButton>
                </MessageForm>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <ActionButton 
                    className="delete" 
                    onClick={() => closeChat(selectedPaymentForMessaging.id)}
                  >
                    Close Chat
                  </ActionButton>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </DashboardContainer>
  );
};

export default AdminDashboard;