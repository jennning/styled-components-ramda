import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { Header } from 'components';
import './Page.css';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    {children}
  </ThemeProvider>
);

export default Page;
