import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scan = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  background: #0f172a;
  color: #ffffff;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: #00ff9d;
  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeIn} 1s ease-out 0.2s both;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ConsoleWindow = styled.div`
  background: #1e293b;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #334155;
  text-align: left;
  font-family: 'Courier New', monospace;
  position: relative;
  animation: ${fadeIn} 1s ease-out 0.4s both;
  
  &::after {
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
    pointer-events: none;
  }
`;

const ConsoleHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #334155;
`;

const ConsoleButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const RedButton = styled(ConsoleButton)`
  background: #ef4444;
`;

const YellowButton = styled(ConsoleButton)`
  background: #f59e0b;
`;

const GreenButton = styled(ConsoleButton)`
  background: #10b981;
`;

const ConsoleTitle = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
  flex-grow: 1;
  text-align: center;
  font-family: 'Courier New', monospace;
`;

const ConsoleContent = styled.div`
  background: #0f172a;
  padding: 1.5rem;
  border-radius: 0.5rem;
  height: 350px;
  overflow-y: auto;
  font-size: 0.9rem;
`;

const ConsoleLine = styled.div`
  margin-bottom: 0.25rem;
  white-space: pre-wrap;
  word-break: break-word;
  
  &.info {
    color: #60a5fa;
  }
  
  &.success {
    color: #34d399;
  }
  
  &.warning {
    color: #fbbf24;
  }
  
  &.error {
    color: #f87171;
  }
  
  &.player {
    color: #a78bfa;
  }
  
  &:last-child {
    color: #94a3b8;
  }
`;

const FeaturesCard = styled.div`
  background: #1e293b;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #334155;
  text-align: left;
  animation: ${fadeIn} 1s ease-out 0.6s both;
`;

const FeaturesTitle = styled.h3`
  color: #00ff9d;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #cbd5e1;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '✓';
    color: #10b981;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const GetServerSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: 1;
  }
`;

const GetServerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
`;

const GetServerTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: #00ff9d;
  animation: ${fadeIn} 1s ease-out;
`;

const GetServerSubtitle = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeIn} 1s ease-out 0.2s both;
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0.5rem;
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(16, 185, 129, 0.5);
  }
`;

const Console = () => {
  const navigate = useNavigate();
  
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

  const features = [
    "Powerful Custom Game Panel - GBNODES has it's Own Fork of Pterodactyl Panel",
    "Extremely Modern, Fast, Responsive Panel with Features to Cater All Your Needs",
    "Custom Server Control Options",
    "Easy to Use and Modern Server File Manager",
    "Server Domain Setup, Plugin Installer, Mod Installer & Version Changer",
    "One Click Server Installation, Egg Changer",
    "Game Server Settings Configuration"
  ];

  return (
    <>
      <Section id="console">
        <Container>
          <Title>Live Server Console</Title>
          <Subtitle>Monitor your server in real-time with our intuitive console</Subtitle>
          
          <FeaturesGrid>
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
            
            <FeaturesCard>
              <FeaturesTitle>Powerful Custom Game Panel</FeaturesTitle>
              <FeatureList>
                {features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeatureList>
            </FeaturesCard>
          </FeaturesGrid>
        </Container>
      </Section>
      
      <GetServerSection>
        <GetServerContainer>
          <GetServerTitle>Get Your Server Today</GetServerTitle>
          <GetServerSubtitle>Ready to elevate your Minecraft experience? Join thousands of satisfied players on our premium hosting platform.</GetServerSubtitle>
          <CTAButton onClick={() => {
            navigate('/pricing');
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          }}>
            View Pricing Plans
          </CTAButton>
        </GetServerContainer>
      </GetServerSection>
    </>
  );
};

export default Console;