import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterSection = styled.footer`
  background-color: #0a0a0a;
  color: #94a3b8;
  padding: 4rem 5% 2rem;
  border-top: 1px solid #1a1a1a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  
  span {
    color: #10b981;
  }
`;

const FooterDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #9ca3af;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #64748b;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`;

const ColumnTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #1a1a1a;
  color: #64748b;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>Nexter<span>Cloud</span></FooterLogo>
            <FooterDescription>
              Premium Minecraft server hosting with enterprise-grade infrastructure and 24/7 support.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterLink to="/pricing">Minecraft Hosting</FooterLink>
            <FooterLink to="/pricing">VPS Servers</FooterLink>
            <FooterLink to="/pricing">Dedicated Servers</FooterLink>
            <FooterLink to="/pricing">Domain Names</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Support</ColumnTitle>
            <FooterLink to="/support">Help Center</FooterLink>
            <FooterLink to="/support">Documentation</FooterLink>
            <FooterLink to="/support">Server Status</FooterLink>
            <FooterLink to="/support">Contact Support</FooterLink>
          </FooterColumn>
        </FooterGrid>
        
        <Copyright>
          © {new Date().getFullYear()} NexterCloud. All rights reserved.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;