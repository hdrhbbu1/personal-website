import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import Header from '../components/Header';

const EmailLink = styled.a``;

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Header>
      <h1>Contact</h1>
      <p>
      If you would like to contact me, please send me an email at{' '}
        <EmailLink href="mailto:1reillym@gmail.com">1reillym@gmail.com</EmailLink>.
      </p>
    </Header>
  </div>
);
