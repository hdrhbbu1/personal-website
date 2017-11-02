import React from 'react';
import styled from 'styled-components';
import {colors} from '../theme';

const Wrapper = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.snow};
`;

const NotFoundPage = () => (
  <Wrapper>
    <h1>404 NOT FOUND</h1>
  </Wrapper>
);

export default NotFoundPage;
