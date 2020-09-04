import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
