import React from 'react';
import styled from 'styled-components';
import {colors} from '../theme';

import PageTitle from '../components/PageTitle';

export default ({transition}) => (
  <div style={transition && transition.style}>
    <PageTitle>
      <h1>Portfolio</h1>
    </PageTitle>
  </div>
);
