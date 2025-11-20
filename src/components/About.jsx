import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const ContentSection = styled.section`
  margin: 3rem 0;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #10b981;
  border-bottom: 2px solid #1e293b;
  padding-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin-bottom: 1.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const TeamMember = styled.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #2a2a2a;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #10b981;
  }
`;

const MemberImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #1e293b;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #10b981;
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #f1f5f9;
`;

const MemberRole = styled.p`
  color: #10b981;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const StatCard = styled.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #2a2a2a;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #94a3b8;
  font-size: 1.1rem;
`;

const MissionStatement = styled.div`
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  margin: 3rem 0;
  
  h2 {
    color: white;
    margin-bottom: 1rem;
  }
  
  p {
    color: #f0fdf4;
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "10+ years in cloud infrastructure and gaming server management."
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      bio: "Expert in distributed systems and high-performance computing."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      bio: "Specializes in customer service and 24/7 support systems."
    },
    {
      name: "Emma Davis",
      role: "Security Lead",
      bio: "Cybersecurity expert with focus on DDoS protection and data safety."
    }
  ];

  const companyStats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Availability" },
    { number: "100+", label: "Server Locations" }
  ];

  return (
    <AboutContainer>
      <Container>
        <SectionTitle>About NexterCloud</SectionTitle>
        <SectionSubtitle>
          Learn more about our mission, team, and commitment to excellence
        </SectionSubtitle>

        <ContentSection>
          <SectionHeading>Our Story</SectionHeading>
          <Paragraph>
            Founded in 2020, NexterCloud began with a simple mission: to provide affordable, 
            high-performance Minecraft server hosting without compromising on quality or support. 
            What started as a small team of passionate gamers has grown into a leading provider 
            of cloud gaming solutions.
          </Paragraph>
          <Paragraph>
            We understand that gaming is more than just a hobby—it's a community. That's why 
            we've built our services around fostering connections, ensuring reliability, and 
            providing the tools our customers need to create incredible experiences.
          </Paragraph>
        </ContentSection>

        <MissionStatement>
          <h2>Our Mission</h2>
          <p>
            To empower gamers and server administrators with cutting-edge cloud technology, 
            exceptional customer support, and a platform that brings communities together. 
            We're committed to making high-quality server hosting accessible to everyone, 
            regardless of their technical expertise.
          </p>
        </MissionStatement>

        <ContentSection>
          <SectionHeading>Meet Our Team</SectionHeading>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember key={index}>
                <MemberImage>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="40" height="40">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </MemberImage>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </TeamMember>
            ))}
          </TeamGrid>
        </ContentSection>

        <ContentSection>
          <SectionHeading>By The Numbers</SectionHeading>
          <StatsGrid>
            {companyStats.map((stat, index) => (
              <StatCard key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </ContentSection>

        <ContentSection>
          <SectionHeading>Our Values</SectionHeading>
          <Paragraph>
            <strong>Customer First:</strong> Everything we do is focused on providing the best 
            experience for our customers.
          </Paragraph>
          <Paragraph>
            <strong>Innovation:</strong> We constantly evolve our technology to stay ahead of 
            industry trends and customer needs.
          </Paragraph>
          <Paragraph>
            <strong>Reliability:</strong> We believe in building systems that our customers can 
            depend on, 24/7.
          </Paragraph>
          <Paragraph>
            <strong>Community:</strong> We're gamers ourselves, and we understand the importance 
            of fostering strong communities.
          </Paragraph>
        </ContentSection>
      </Container>
    </AboutContainer>
  );
};

export default About;