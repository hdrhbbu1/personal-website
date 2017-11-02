import React from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import {colors} from '../theme';
import NavList from '../components/NavList';

import '../css/reset.css';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.2rem 0;
`;

const Header = styled.header`
  display: flex;
  color: ${colors.primary};
`;

const SiteTitle = styled.h3`flex: 1;`;

export default ({children, data}) => (
  <div>
    <Wrapper>
      <Header>
        <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
        <NavList />
      </Header>
      {children()}
    </Wrapper>
  </div>
);

injectGlobal`
  body {
    background-color: ${colors.white};
  }
`

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
