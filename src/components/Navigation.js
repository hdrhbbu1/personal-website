import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import NavItem from '../components/NavItem';
import { colors, sizes } from '../theme';

const Navigation = styled.ul`
  position: relative;
  display: flex;
  flex: 0 1 100%;
  align-items: center;
  height: 65px;
  margin: 0;
  padding: 0 1em;
  margin-bottom: 25px;
  border-radius: 6px;
  color: ${colors.bg};
  box-shadow: 0px 7px 23px -18px rgba(0, 0, 0, 0.4);
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0px 9px 26px -18px rgba(0, 0, 0, 0.8);
    opacity: 0;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const Social = styled.a`
  margin-right: 0;
  > a {
    color: ${colors.primary};
  }
  ${sizes.Tablet} {
    margin: 0 auto;
  }
`;

const NavItems = styled.ul`
  font-size: 1.2em;
  display: none;
  ${sizes.Tablet} {
    display: block;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const SiteTitle = styled(Link)`
  margin-left: 0;
  margin-right: auto;
  color: ${colors.primary};
  font-size: 1.4em;
`;

export default ({ title }) => (
  <Navigation role="navigation">
    <SiteTitle to="/">{title}</SiteTitle>
    <Social href="https://www.github.com/reillym">
      <svg
        aria-hidden="true"
        height="28"
        version="1.1"
        viewBox="0 0 16 16"
        width="28"
      >
        <path
          fill={colors.primary}
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </Social>
    <NavItems>
      <NavItem linkTo="/portfolio">Portfolio</NavItem>
      <NavItem linkTo="/blog">Blog</NavItem>
      <NavItem linkTo="/about">About</NavItem>
      <NavItem linkTo="/contact">Contact</NavItem>
    </NavItems>
  </Navigation>
);
