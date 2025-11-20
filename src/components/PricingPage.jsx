import React from 'react';
import styled from 'styled-components';
import Pricing from './Pricing';

const PricingPageSection = styled.section`
  padding: 2rem 0;
`;

const PricingPage = () => {
  return (
    <PricingPageSection>
      <Pricing />
    </PricingPageSection>
  );
};

export default PricingPage;