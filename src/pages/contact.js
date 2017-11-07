import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const EmailLink = styled.a`color: ${colors.primary};`;

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Contact</h1>
    <p>
      If you would like to connect with me you can email me at{' '}
      <EmailLink href="mailto:1reillym@gmail.com">1reillym@gmail.com</EmailLink>
    </p>
  </div>
);
