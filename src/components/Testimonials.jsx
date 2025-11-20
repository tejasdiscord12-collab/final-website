import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid #2a2a2a;
  
  &::before {
    content: """;
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 5rem;
    color: rgba(16, 185, 129, 0.1);
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const TestimonialContent = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
  color: #10b981;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  margin: 0;
  color: #f1f5f9;
`;

const AuthorRole = styled.p`
  margin: 0;
  color: #94a3b8;
  font-size: 0.9rem;
`;

const testimonials = [
  {
    content: "NexterCloud has transformed our Minecraft server experience. The performance is incredible and our players have never been happier. The support team is also fantastic!",
    author: "Alex Johnson",
    role: "Server Owner"
  },
  {
    content: "I've tried multiple hosting providers, but NexterCloud stands out with its reliability and speed. The one-click mod installation saved me hours of work.",
    author: "Sarah Williams",
    role: "Minecraft Community Manager"
  },
  {
    content: "The uptime guarantee is no joke - our server has been running flawlessly for over a year. The pricing is also very competitive for the quality of service.",
    author: "Michael Chen",
    role: "Gaming Guild Leader"
  }
];

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Container>
        <SectionTitle>What Our Customers Say</SectionTitle>
        <SectionSubtitle>
          Don't just take our word for it - hear from our satisfied customers
        </SectionSubtitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialContent>{testimonial.content}</TestimonialContent>
              <TestimonialAuthor>
                <AuthorAvatar>
                  {testimonial.author.charAt(0)}
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;