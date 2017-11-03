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
  background: ${props => (props.selected ? 'palevioletred' : 'transparent')};
  ${props => props.left ? 'margin-right: auto' : 'margin-left: 15px'};
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
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
  &:hover:after {
    width: 100%;
    background: ${colors.primary};
  }
`;