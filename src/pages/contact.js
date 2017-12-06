import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const EmailLink = styled.a`color: ${colors.primary};`;

const Header = styled.header`
  text-align: center;
  padding: 50px;
`;

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Header>
      <h1>Contact</h1>
      <p>
      If you would like to connect with me you can send me an email at{' '}
        <EmailLink href="mailto:1reillym@gmail.com">1reillym@gmail.com</EmailLink>
      </p>
    </Header>
  </div>
);
