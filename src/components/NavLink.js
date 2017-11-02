import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {colors} from '../theme';

const NavLink = ({ to, selected, className, children }) => (
  <li className={className} >
    <Link to={to}>
      {children}
    </Link>
  </li>
);

export default styled(NavLink)`
  margin-left: 0.5em;
  background: ${props => (props.selected ? 'palevioletred' : 'transparent')};
  > a {
    display: inline-block;
    position: relative;
    color: ${colors.primary};
    text-decoration: none;
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: transparent;
    transition: width 0.3s ease, background-color 0.3s ease;
  }
  &:hover:after {
    width: 100%;
    background: ${colors.primary};
  }
`;