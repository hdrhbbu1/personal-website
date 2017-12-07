import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

import { colors, sizes } from '../theme';


export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Header>
      <h1>Michael T. Reilly</h1>
      <h2>Web / UI Developer</h2>
    </Header>
  </div>
);
