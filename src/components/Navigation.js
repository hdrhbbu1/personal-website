import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

import github from '../assets/github_icon.svg';
import codepen from '../assets/codepen_icon.svg';
import linkedin from '../assets/linkedin_icon.svg';

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
  display: none;
  margin-left: ${rhythm(2)};
  justify-content: center;
  > a {
    margin: 0 ${rhythm(0.3)};
  }
  ${sizes.Tablet} {
    display: flex;
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
  color: ${colors.primary};
  font-weight: 400;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.530, 0, 0.380, 1), opacity 0.3s cubic-bezier(0.530, 0, 0.380, 1);
    transform: translateY(5px);
    background-color: ${colors.primary};
  }
  &:hover:after {
    transform: translateY(0);
    opacity: 1;
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
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </PrimarySection>
        <SocialSection>
          <SocialLink href="https://github.com/reillym">
            <img height="30" width="30" src={github} alt="github" />
          </SocialLink>
          <SocialLink href="#">
            <img height="30" width="30" src={codepen} alt="codepen" />
          </SocialLink>
          <SocialLink href="#">
            <img height="30" width="23" src={linkedin} alt="linkedin" />
          </SocialLink>
        </SocialSection>
      </RootNav>
    </Container>
  </Navigation>
);
