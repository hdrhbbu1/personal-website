import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
`;

const GradientH1 = styled.h1`
  background: linear-gradient(to right, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.5rem;
`;

const NotFoundPage = () => (
  <Wrapper>
    <GradientH1>404 NOT FOUND</GradientH1>
  </Wrapper>
);

export default NotFoundPage;
