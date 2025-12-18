import React from 'react';
import styled from 'styled-components';

const TeamSection = styled.section`
  padding: 5rem 5%;
  background-color: #0a0a0a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const TeamCard = styled.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 3rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #10b981;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: bold;
  color: #10b981;
  border: 2px solid rgba(16, 185, 129, 0.3);
`;

const Name = styled.h3`
  font-size: 1.5rem;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  color: #10b981;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
`;

const Bio = styled.p`
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const teamMembers = [
  {
    name: "Daniyal",
    role: "Founder",
    bio: "Visionary leader driving the strategic direction and innovation behind NexterCloud."
  },
  {
    name: "Atulya",
    role: "Founder",
    bio: "Technical architect ensuring our infrastructure is robust, scalable, and cutting-edge."
  },
  {
    name: "Darpan",
    role: "Founder",
    bio: "Reviewing operations and customer experience to deliver the best service possible."
  }
];

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <SectionTitle>Meet Our Team</SectionTitle>
        <SectionSubtitle>
          The visionary minds behind NexterCloud's success
        </SectionSubtitle>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <Avatar>
                {member.name.charAt(0)}
              </Avatar>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
              <Bio>{member.bio}</Bio>
            </TeamCard>
          ))}
        </TeamGrid>
      </Container>
    </TeamSection>
  );
};

export default Team;
