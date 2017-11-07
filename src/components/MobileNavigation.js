import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { colors, sizes } from '../theme';

const NavLink = styled(Link)`
  color: ${colors.primary};
  text-align: center;
  text-decoration: none;
  padding: 0.8em;
`;

const MobileNavItem = ({ linkTo, label }) => (
  <NavLink to={linkTo}>
    <div>{label}</div>
  </NavLink>
);

const MobileNavigation = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.bg};
  box-shadow: 0px -10px 23px -18px rgba(0, 0, 0, 1);
  ${sizes.Tablet} {
    display: none;
  }
`;

export default () => (
  <MobileNavigation role="navigation">
    <MobileNavItem linkTo="/portfolio" label="Portfolio" />
    <MobileNavItem linkTo="/blog" label="Blog" />
    <MobileNavItem linkTo="/about" label="About" />
    <MobileNavItem linkTo="/contact" label="Contact" />
  </MobileNavigation>
);
