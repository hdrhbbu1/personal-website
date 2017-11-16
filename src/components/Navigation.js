import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

const Navigation = styled.header`
  position: absolute;
  left: 0;
  top: 10px;
  height: 50px;
  width: 100%;
  z-index: 500;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const RootNav = styled.ul`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LogoSection = styled.li`
  margin-left: ${rhythm(1)};
  justify-self: flex-start;
`;

const PrimarySection = styled.li`
  display: flex;
  margin-left: ${rhythm(2)};
  justify-content: center;
  > a:nth-child(2) {
    margin: 0 ${rhythm(1)};
  }
`;

const SocialSection = styled.li`
  position: absolute;
  display: flex;
  top: 0;
  right: ${rhythm(1)};
  > a:nth-child(2) {
    margin: 0 ${rhythm(1)};
  }
`;

const NavLink = styled(Link)`
  color: ${colors.bg};
  font-weight: 300;
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

const SocialLink = styled.a`
  color: ${colors.primary};
`;

export default ({ title, hasPageHeader }) => (
  <Navigation role="navigation">
    <Container>
      <RootNav>
        <LogoSection>
          <NavLink to="/">{ title }</NavLink>
        </LogoSection>
        <PrimarySection>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </PrimarySection>
        <SocialSection>
          <SocialLink href="https://github.com/reillym">Github</SocialLink>
          <SocialLink href="#">Codepen</SocialLink>
          <SocialLink href="#">LinkedIn</SocialLink>
        </SocialSection>
      </RootNav>
    </Container>
  </Navigation>
);
