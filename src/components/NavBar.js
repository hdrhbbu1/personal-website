import React from 'react';
import styled from 'styled-components';
import PageLink from '../components/PageLink';
import {colors} from '../theme';


const List = styled.ul`
  display: flex;
  flex: 0 1 100%;
  align-items: center;
  height: 65px;
  margin: 0;
  padding: 0 10px;
  margin-bottom: 25px;
  border-radius: 6px;
  list-style: none;
  color: ${colors.snow};
  font-size: 1.1em;
  box-shadow: 6px 10px 20px -20px rgba(59, 89, 153, 1);
`;

const Social = styled.li`
  margin-left: auto;
  margin-right: auto;
  > a {
    color: ${colors.primary};
  }
`

const SiteTitle = styled.h2`  
  font-size: 1.4em;
  font-weight: 400;
`;

class NavBar extends React.Component {
  render() {
    return <List role="navigation">
        <PageLink left to="/">
          <SiteTitle>{this.props.title}</SiteTitle>
        </PageLink>
        <Social>
          <a href="https://www.github.com/reillym">
          <svg aria-hidden="true" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" fill={colors.primary} d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </Social>
        <PageLink to="/portfolio">Portfolio</PageLink>
        <PageLink to="/blog">Blog</PageLink>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/contact">Contact</PageLink>
      </List>;
  }
}

export default NavBar;