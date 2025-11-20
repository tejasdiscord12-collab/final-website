import React from 'react';
import styled from 'styled-components';

const SupportSection = styled.section`
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

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SupportCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SupportIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: #dcfce7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 35px;
    height: 35px;
    color: #10b981;
  }
`;

const SupportTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0f172a;
`;

const SupportDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SupportButton = styled.button`
  background-color: #10b981;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #059669;
  }
`;

const Support = () => {
  return (
    <SupportSection>
      <Container>
        <SectionTitle>Support Center</SectionTitle>
        <SupportGrid>
          <SupportCard>
            <SupportIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </SupportIcon>
            <SupportTitle>Contact Us</SupportTitle>
            <SupportDescription>
              Reach out to our support team for assistance with any issues or questions.
            </SupportDescription>
            <SupportButton>Email Support</SupportButton>
          </SupportCard>
          
          <SupportCard>
            <SupportIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </SupportIcon>
            <SupportTitle>Knowledge Base</SupportTitle>
            <SupportDescription>
              Browse our comprehensive documentation and tutorials for self-help.
            </SupportDescription>
            <SupportButton>Visit Knowledge Base</SupportButton>
          </SupportCard>
          
          <SupportCard>
            <SupportIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </SupportIcon>
            <SupportTitle>FAQ</SupportTitle>
            <SupportDescription>
              Find answers to commonly asked questions about our services.
            </SupportDescription>
            <SupportButton>View FAQ</SupportButton>
          </SupportCard>
        </SupportGrid>
      </Container>
    </SupportSection>
  );
};

export default Support;