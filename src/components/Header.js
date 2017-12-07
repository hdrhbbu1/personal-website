import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  padding: 50px;
  background-color: ${props => (props.color ? props.color : 'white')};
`;

export default ({ children, color }) => (
  <Header color={color}>
    {children}
  </Header>
);
