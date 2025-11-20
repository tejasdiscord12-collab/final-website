import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Advanced animations
const rotate3d = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-15px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(138, 43, 226, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px rgba(138, 43, 226, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(138, 43, 226, 0);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const neonGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px #8a2be2, 0 0 20px #8a2be2, 0 0 30px #8a2be2;
  }
  50% {
    box-shadow: 0 0 15px #00ff9d, 0 0 25px #00ff9d, 0 0 35px #00ff9d;
  }
`;

// Updated styles
const HeroSection = styled.section`
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%);
  color: white;
  padding: 8rem 5% 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0, 255, 157, 0.15) 0%, transparent 40%);
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  text-align: left;
  
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(90deg, #8a2be2, #00ff9d, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 4s ease infinite;
  background-size: 300% 300%;
  text-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 992px) {
    margin: 0 auto 2rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0.5rem;
  box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
  animation: ${pulse} 2s infinite;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(138, 43, 226, 0.5);
    animation: none;
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 992px) {
    display: block;
    margin: 1rem auto;
  }
`;

const SecondaryButton = styled(CTAButton)`
  background: transparent;
  border: 2px solid #8a2be2;
  animation: none;
  
  &:hover {
    background: rgba(138, 43, 226, 0.1);
    animation: none;
  }
`;

const PricingLink = styled.button`
  background: none;
  border: none;
  color: #8a2be2;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: underline;
  margin-top: 1rem;
  
  &:hover {
    color: #00ff9d;
    text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
  }
`;

const VisualContainer = styled.div`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  
  @media (max-width: 992px) {
    height: 350px;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #8a2be2, #00ff9d);
  animation: ${float} 8s ease-in-out infinite;
  opacity: 0.7;
  box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
`;

// New 3D Core Structure
const CoreStructure = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: ${rotate3d} 25s infinite linear;
  
  @media (max-width: 992px) {
    width: 150px;
    height: 150px;
  }
`;

const CoreFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(138, 43, 226, 0.1);
  border: 2px solid #8a2be2;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  animation: ${neonGlow} 3s ease-in-out infinite alternate;
  
  @media (max-width: 992px) {
    width: 150px;
    height: 150px;
  }
  
  &.front {
    transform: translateZ(100px);
    
    @media (max-width: 992px) {
      transform: translateZ(75px);
    }
  }
  
  &.back {
    transform: rotateY(180deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateY(180deg) translateZ(75px);
    }
  }
  
  &.right {
    transform: rotateY(90deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateY(90deg) translateZ(75px);
    }
  }
  
  &.left {
    transform: rotateY(-90deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateY(-90deg) translateZ(75px);
    }
  }
  
  &.top {
    transform: rotateX(90deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateX(90deg) translateZ(75px);
    }
  }
  
  &.bottom {
    transform: rotateX(-90deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateX(-90deg) translateZ(75px);
    }
  }
`;

const CoreIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #8a2be2, #00ff9d);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.7);
  animation: ${pulse} 4s infinite;
  
  @media (max-width: 992px) {
    width: 75px;
    height: 75px;
  }
  
  svg {
    width: 60px;
    height: 60px;
    fill: white;
    
    @media (max-width: 992px) {
      width: 45px;
      height: 45px;
    }
  }
`;

const OrbitRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border: 1px solid rgba(138, 43, 226, 0.3);
  border-radius: 50%;
  animation: ${rotate3d} 30s infinite linear reverse;
  
  @media (max-width: 992px) {
    width: 250px;
    height: 250px;
  }
`;

const OrbitRingInner = styled(OrbitRing)`
  width: 350px;
  height: 350px;
  border-color: rgba(0, 255, 157, 0.3);
  animation-duration: 40s;
  
  @media (max-width: 992px) {
    width: 280px;
    height: 280px;
  }
`;

const Satellite = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #00ff9d, #8a2be2);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.7);
  animation: ${float} 6s ease-in-out infinite;
`;

const Hero = () => {
  const navigate = useNavigate();
  
  // Create particles
  const particles = [];
  for (let i = 0; i < 30; i++) {
    const size = Math.random() * 20 + 5;
    particles.push(
      <Particle 
        key={i} 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${8 + Math.random() * 10}s`,
          background: i % 4 === 0 
            ? 'linear-gradient(135deg, #8a2be2, #00ff9d)' 
            : i % 4 === 1 
              ? 'linear-gradient(135deg, #00ff9d, #8a2be2)' 
              : i % 4 === 2 
                ? 'linear-gradient(135deg, #00ccff, #8a2be2)'
                : 'linear-gradient(135deg, #ff00ff, #00ff9d)'
        }} 
      />
    );
  }

  // Create satellites
  const satellites = [];
  for (let i = 0; i < 8; i++) {
    satellites.push(
      <Satellite 
        key={i} 
        style={{
          width: `${Math.random() * 10 + 10}px`,
          height: `${Math.random() * 10 + 10}px`,
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(150px)`,
          animationDelay: `${i * 0.5}s`
        }} 
      />
    );
  }

  return (
    <HeroSection>
      <FloatingElements>
        {particles}
      </FloatingElements>
      
      <Container>
        <Content>
          <Title>Premium Minecraft Server Hosting</Title>
          <Subtitle>
            Experience unparalleled performance with our enterprise-grade infrastructure designed specifically for Minecraft servers. 
            Powered by our custom 3D game panel with advanced features.
          </Subtitle>
          
          <div>
            <CTAButton onClick={() => navigate('/pricing')}>Get Started Now</CTAButton>
            <SecondaryButton onClick={() => navigate('/pricing')}>View All Plans</SecondaryButton>
          </div>
          
          <PricingLink onClick={() => navigate('/pricing')}>
            View Pricing Plans
          </PricingLink>
        </Content>
        
        <VisualContainer>
          <OrbitRing />
          <OrbitRingInner />
          {satellites}
          <CoreStructure>
            <CoreFace className="front">
              <CoreIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </CoreIcon>
            </CoreFace>
            <CoreFace className="back">
              <CoreIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </CoreIcon>
            </CoreFace>
            <CoreFace className="right">
              <CoreIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </CoreIcon>
            </CoreFace>
            <CoreFace className="left">
              <CoreIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </CoreIcon>
            </CoreFace>
            <CoreFace className="top">
              <CoreIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </CoreIcon>
            </CoreFace>
            <CoreFace className="bottom">
              <CoreIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </CoreIcon>
            </CoreFace>
          </CoreStructure>
        </VisualContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;