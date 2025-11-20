import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  padding: 5rem 5%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #94a3b8;
  font-size: 1.25rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  border: 1px solid #334155;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  ${props => props.featured && `
    border: 2px solid #8a2be2;
    box-shadow: 0 20px 25px -5px rgba(138, 43, 226, 0.1), 0 10px 10px -5px rgba(138, 43, 226, 0.04);
  `}
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #8a2be2;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  
  span {
    font-size: 1rem;
    color: #94a3b8;
    font-weight: 400;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const Feature = styled.li`
  padding: 0.5rem 0;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  
  &::before {
    content: "→";
    margin-right: 0.5rem;
    color: #8a2be2;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
  }
`;

const ErrorMessage = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ef4444;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Pricing = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  // Define the new pricing plans
  const plans = [
    {
      name: 'Normal Plan',
      price: 0.50,
      priceINR: 40,
      features: [
        '1 GB RAM',
        '5 GB NVMe SSD',
        '1 vCore',
        'Ideal for: Friends / Test Servers'
      ]
    },
    {
      name: 'Bot Plan',
      price: 1,
      priceINR: 80,
      featured: true,
      features: [
        '2 GB RAM',
        '10 GB NVMe SSD',
        '1 vCore',
        'Ideal for: Small SMP / Light Mods'
      ]
    },
    {
      name: 'SMP Plan',
      price: 2,
      priceINR: 160,
      features: [
        '4 GB RAM',
        '20 GB NVMe SSD',
        '1.5 vCores',
        'Ideal for: PvP / Regular SMP'
      ]
    },
    {
      name: 'Server Plan',
      price: 4,
      priceINR: 320,
      features: [
        '8 GB RAM',
        '30 GB NVMe SSD',
        '3 vCores',
        'Ideal for: Medium Servers / Mini-Games'
      ]
    },
    {
      name: 'Community Plan',
      price: 5.5,
      priceINR: 480,
      features: [
        '12 GB RAM',
        '40 GB NVMe SSD',
        '4 vCores',
        'Ideal for: Lifesteal / Heavy Modpacks'
      ]
    },
    {
      name: 'Nexter Plan',
      price: 11,
      priceINR: 960,
      features: [
        '24 GB RAM',
        '50 GB NVMe SSD',
        '6 vCores',
        'Ideal for: Public Networks / Intensive Loads'
      ]
    },
    {
      name: 'Beast Performance Plan',
      price: 14,
      priceINR: 1280,
      features: [
        '32 GB RAM',
        '60 GB NVMe SSD',
        '8 vCores',
        'Ideal for: Public Networks / Intensive Loads'
      ]
    }
  ];

  const handleGetStarted = () => {
    // Check if user is authenticated
    const token = localStorage.getItem('userToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      // User is authenticated, proceed to billing
      navigate('/billing');
    } else {
      // User is not authenticated, show error message
      setErrorMessage('Please sign up and login first to purchase a plan');
      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <Section id="pricing">
      <Container>
        <Title>Simple, Transparent Pricing</Title>
        <Subtitle>Choose the perfect plan for your Minecraft server</Subtitle>
        
        {errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
        
        <CardsContainer>
          {plans.map((plan, index) => (
            <Card key={index} featured={plan.featured}>
              {plan.featured && <FeaturedBadge>MOST POPULAR</FeaturedBadge>}
              <PlanName>{plan.name}</PlanName>
              <Price>
                ${plan.price}/month
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                  ₹{plan.priceINR} INR
                </div>
              </Price>
              <FeaturesList>
                {plan.features.map((feature, idx) => (
                  <Feature key={idx}>{feature}</Feature>
                ))}
              </FeaturesList>
              <Button onClick={handleGetStarted}>
                Get Started
              </Button>
            </Card>
          ))}
        </CardsContainer>
      </Container>
    </Section>
  );
};

export default Pricing;