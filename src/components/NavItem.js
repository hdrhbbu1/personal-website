import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { colors } from '../theme';

const ListItem = styled.li`
  display: inline-block;
  margin-left: 15px;
  margin-bottom: 0;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: transparent;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
  &:hover:after {
    width: 100%;
    background: ${colors.primary};
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  font-weight: 300;
`;

export default ({ linkTo, selected, children }) => (
  <ListItem>
    <StyledLink to={linkTo}>{children}</StyledLink>
  </ListItem>
);
