import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Terminal scanline effect
const scan = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

// Glow effect for terminal
const terminalGlow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
  }
`;

// Pulse animation for online status
const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const DashboardContainer = styled.div`
  background: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding-top: 4rem;
`;

const Nav = styled.nav`
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(30, 41, 59, 0.5);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ff9d;
  text-decoration: none;
  background: linear-gradient(90deg, #00ff9d, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
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

const MenuLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #00ff9d;
  }
  
  &.active {
    color: #00ff9d;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #00ff9d;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
`;

const LoginButton = styled(Button)`
  background: transparent;
  color: #00ff9d;
  border: 2px solid #00ff9d;
  
  &:hover {
    background: rgba(0, 255, 157, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 157, 0.3);
  }
`;

const SignupButton = styled(Button)`
  background: linear-gradient(90deg, #00ff9d, #00ffff);
  color: #000000;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.3);
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
  border: 1px solid rgba(51, 65, 85, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00ff9d;
    border-color: #00ff9d;
    box-shadow: 0 0 10px rgba(0, 255, 157, 0.2);
  }
`;

const AdminButton = styled.button`
  background: linear-gradient(90deg, #8b5cf6, #7c3aed);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
  }
`;

const MainContent = styled.main`
  padding: 2rem 5%;
  max-width: 1200px;
  margin: 0 auto;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
`;

const ServerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ServerName = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatusLight = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  animation: ${pulse} 2s infinite;
`;

const StatusText = styled.span`
  color: #10b981;
  font-weight: 500;
  font-size: 0.9rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ConsoleCard = styled.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
  animation: ${terminalGlow} 3s ease-in-out infinite;
  overflow: hidden;
  height: fit-content;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`;

const ConsoleWindow = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 1.5rem;
  font-family: 'SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', monospace;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 50%,
      rgba(0, 255, 157, 0.05) 50%
    );
    background-size: 100% 3px;
    animation: ${scan} 8s linear infinite;
    z-index: 2;
    pointer-events: none;
  }
`;

const ConsoleHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ConsoleButton = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const RedButton = styled(ConsoleButton)`
  background: #ef4444;
  box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
`;

const YellowButton = styled(ConsoleButton)`
  background: #f59e0b;
  box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
`;

const GreenButton = styled(ConsoleButton)`
  background: #10b981;
  box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
`;

const ConsoleTitle = styled.div`
  color: #9ca3af;
  font-size: 0.875rem;
  flex-grow: 1;
  text-align: center;
  font-family: 'SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', monospace;
`;

const ConsoleContent = styled.div`
  color: #10b981;
  line-height: 1.6;
  height: 350px;
  overflow-y: auto;
  font-size: 0.875rem;
`;

const ConsoleLine = styled.div`
  margin-bottom: 0.125rem;
  white-space: pre-wrap;
  word-break: break-word;
  
  &.info {
    color: #60a5fa;
    text-shadow: 0 0 2px rgba(96, 165, 250, 0.5);
  }
  
  &.success {
    color: #34d399;
    text-shadow: 0 0 2px rgba(52, 211, 153, 0.5);
  }
  
  &.warning {
    color: #fbbf24;
    text-shadow: 0 0 2px rgba(251, 191, 36, 0.5);
  }
  
  &.error {
    color: #f87171;
    text-shadow: 0 0 2px rgba(248, 113, 113, 0.5);
  }
  
  &.player {
    color: #a78bfa;
    text-shadow: 0 0 2px rgba(167, 139, 250, 0.5);
  }
  
  &:last-child {
    color: #9ca3af;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-row: 1;
  }
`;

const StatsCard = styled.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
`;

const StatsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`;

const StatsTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const StatItem = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  
  &.players {
    color: #60a5fa;
  }
  
  &.cpu {
    color: #fbbf24;
  }
  
  &.memory {
    color: #a78bfa;
  }
  
  &.uptime {
    color: #34d399;
  }
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: #9ca3af;
`;

const PlayersCard = styled.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
`;

const PlayersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`;

const PlayersTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`;

const PlayerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PlayerItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
  
  &:last-child {
    border-bottom: none;
  }
`;

const PlayerName = styled.span`
  color: #cbd5e1;
`;

const PlayerStatus = styled.span`
  color: #34d399;
  font-size: 0.8rem;
`;

const Dashboard = () => {
  const navigate = useNavigate();
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
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    navigate('/');
  };
  
  const consoleLines = [
    { text: '$ Server initializing...', type: 'info' },
    { text: '$ Loading world: "SurvivalWorld"', type: 'info' },
    { text: '$ Plugins loaded: 12', type: 'info' },
    { text: '$ Starting Minecraft server on port 25565', type: 'info' },
    { text: '$ Server started successfully!', type: 'success' },
    { text: '[Player] Steve joined the game', type: 'player' },
    { text: '[Player] Alex joined the game', type: 'player' },
    { text: '[Steve] Hello everyone!', type: 'player' },
    { text: '[Warning] Memory usage at 78%', type: 'warning' },
    { text: '[Player] Alex left the game', type: 'player' },
    { text: '[Player] Mike joined the game', type: 'player' },
    { text: '$ World auto-saved', type: 'info' },
    { text: '[Player] Steve: How do I craft a pickaxe?', type: 'player' },
    { text: '[Player] Mike: Press E to open inventory', type: 'player' },
    { text: '' }
  ];
  
  const stats = {
    players: 12,
    cpu: '45%',
    memory: '2.1GB',
    uptime: '2d 14h'
  };
  
  const players = [
    { name: 'Steve', status: 'Online' },
    { name: 'Alex', status: 'Online' },
    { name: 'Mike', status: 'Online' },
    { name: 'Jenny', status: 'Online' },
    { name: 'Tom', status: 'Online' },
    { name: 'Sarah', status: 'Online' }
  ];

  return (
    <DashboardContainer>
      <Nav>
        <Container>
          <Logo>Nexter<span>Cloud</span></Logo>
          
          <Menu>
            <MenuItem><MenuLink href="/">Home</MenuLink></MenuItem>
            <MenuItem><MenuLink href="/#features">Features</MenuLink></MenuItem>
            <MenuItem><MenuLink href="/#pricing">Pricing</MenuLink></MenuItem>
            <MenuItem><MenuLink href="/support">Support</MenuLink></MenuItem>
            <MenuItem><MenuLink href="/about">About</MenuLink></MenuItem>
          </Menu>
          
          {isAuthenticated && user ? (
            <UserMenu>
              <UserName>Welcome, {user.name}</UserName>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
              <AdminButton onClick={() => navigate('/admin/login')}>Admin</AdminButton>
            </UserMenu>
          ) : (
            <AuthButtons>
              <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
              <SignupButton onClick={() => navigate('/signup')}>Sign Up</SignupButton>
              <AdminButton onClick={() => navigate('/admin/login')}>Admin</AdminButton>
            </AuthButtons>
          )}
        </Container>
      </Nav>
      
      <MainContent>
        <DashboardHeader>
          <ServerInfo>
            <ServerName>SurvivalWorld</ServerName>
            <StatusIndicator>
              <StatusLight />
              <StatusText>ONLINE</StatusText>
            </StatusIndicator>
          </ServerInfo>
        </DashboardHeader>
        
        <DashboardGrid>
          <ConsoleCard>
            <CardHeader>
              <CardTitle>Live Server Console</CardTitle>
            </CardHeader>
            
            <ConsoleWindow>
              <ConsoleHeader>
                <RedButton />
                <YellowButton />
                <GreenButton />
                <ConsoleTitle>server-console.log</ConsoleTitle>
              </ConsoleHeader>
              
              <ConsoleContent>
                {consoleLines.map((line, index) => (
                  <ConsoleLine key={index} className={line.type}>
                    {line.text}
                  </ConsoleLine>
                ))}
              </ConsoleContent>
            </ConsoleWindow>
          </ConsoleCard>
          
          <Sidebar>
            <StatsCard>
              <StatsHeader>
                <StatsTitle>Server Stats</StatsTitle>
              </StatsHeader>
              
              <StatsGrid>
                <StatItem>
                  <StatValue className="players">{stats.players}</StatValue>
                  <StatLabel>Players</StatLabel>
                </StatItem>
                
                <StatItem>
                  <StatValue className="cpu">{stats.cpu}</StatValue>
                  <StatLabel>CPU</StatLabel>
                </StatItem>
                
                <StatItem>
                  <StatValue className="memory">{stats.memory}</StatValue>
                  <StatLabel>Memory</StatLabel>
                </StatItem>
                
                <StatItem>
                  <StatValue className="uptime">{stats.uptime}</StatValue>
                  <StatLabel>Uptime</StatLabel>
                </StatItem>
              </StatsGrid>
            </StatsCard>
            
            <PlayersCard>
              <PlayersHeader>
                <PlayersTitle>Online Players</PlayersTitle>
              </PlayersHeader>
              
              <PlayerList>
                {players.map((player, index) => (
                  <PlayerItem key={index}>
                    <PlayerName>{player.name}</PlayerName>
                    <PlayerStatus>{player.status}</PlayerStatus>
                  </PlayerItem>
                ))}
              </PlayerList>
            </PlayersCard>
          </Sidebar>
        </DashboardGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;