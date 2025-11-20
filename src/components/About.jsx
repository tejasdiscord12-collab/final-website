import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8fafc;
  min-height: 70vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0f172a;
`;

const Content = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <SectionTitle>About NexterCloud</SectionTitle>
        <Content>
          <p>
            NexterCloud is a premium Minecraft server hosting provider dedicated to delivering 
            exceptional performance and reliability for Minecraft communities worldwide.
          </p>
          <p>
            Founded in 2020, our team of experts has years of experience in both gaming and 
            infrastructure management. We understand the unique needs of Minecraft server 
            administrators and players, which is why we've built our platform specifically 
            for the Minecraft community.
          </p>
          <p>
            Our state-of-the-art data centers, powered by enterprise-grade hardware and 
            backed by 24/7 monitoring, ensure your server stays online and performs at its best.
          </p>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;