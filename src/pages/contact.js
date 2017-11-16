import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const EmailLink = styled.a`color: ${colors.primary};`;

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <p>
      If you would like to connect with me you can send me an email at{' '}
      <EmailLink href="mailto:1reillym@gmail.com">1reillym@gmail.com</EmailLink>
    </p>
  </div>
);
