import React from 'react';
import styled from 'styled-components';

import { colors, sizes } from '../theme';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Content</h1>
  </div>
);
