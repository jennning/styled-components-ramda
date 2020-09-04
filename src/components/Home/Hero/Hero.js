import React from 'react';
import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  HeroButton
} from './Hero.styled';

const Hero = () => (
  <StyledSection>
    <StyledContainer>
      <StyledTitle>
        styled-components
        <br />
        with Ramda
      </StyledTitle>
      <HeroButton onClick={() => alert('Hi!')}>Click me!</HeroButton>
    </StyledContainer>
  </StyledSection>
);

export default Hero;
