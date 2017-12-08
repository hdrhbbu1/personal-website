import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const Container = styled.div`
  margin: ${rhythm(1)} auto;
  ${props => props.width && `max-width: ${props.width}`}
`;

export default ({ children, width }) => (
  <Container width={width}>
    {children}
  </Container>
);
