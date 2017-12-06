import React from 'react';
import styled from 'styled-components';

import { colors, sizes } from '../theme';

const Header = styled.header`
  text-align: center;
  padding: 50px;
`;

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Header>
      <h1>Content</h1>
    </Header>
  </div>
);
