import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  background: #0f172a;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
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

const NetworkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const NetworkItem = styled.div`
  background: #1e293b;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  border: 1px solid #334155;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out 0.4s both, ${float} 6s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #00ff9d;
    box-shadow: 0 10px 25px rgba(0, 255, 157, 0.2);
  }
  
  &:nth-child(2) {
    animation-delay: 0.6s, 1s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.8s, 2s;
  }
  
  &:nth-child(4) {
    animation-delay: 1s, 3s;
  }
`;

const Location = styled.h3`
  color: #00ffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Latency = styled.div`
  font-family: 'Courier New', monospace;
  color: #e2e8f0;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const Status = styled.div`
  color: #10b981;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${pulse} 2s infinite;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
`;

const Network = () => {
  const locations = [
    { name: 'India', latency: '12ms', status: 'ONLINE' },
    { name: 'USA', latency: '8ms', status: 'ONLINE' },
    { name: 'Germany', latency: '25ms', status: 'ONLINE' },
    { name: 'Singapore', latency: '5ms', status: 'ONLINE' },
  ];

  return (
    <Section id="network">
      <Container>
        <Title>Global Network</Title>
        <Subtitle>Our servers are strategically located around the world for optimal performance</Subtitle>
        
        <NetworkGrid>
          {locations.map((location, index) => (
            <NetworkItem key={index}>
              <Location>{location.name}</Location>
              <Latency>{location.latency}</Latency>
              <Status>{location.status}</Status>
            </NetworkItem>
          ))}
        </NetworkGrid>
      </Container>
    </Section>
  );
};

export default Network;