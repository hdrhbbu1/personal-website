import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {colors} from '../theme';

export default styled(Link)`
  color: inherit;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: inherit;
  }
`;