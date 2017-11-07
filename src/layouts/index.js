import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Navigation from '../components/Navigation';
import MobileNavigation from '../components/MobileNavigation';

import { colors } from '../theme';

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 960px;
`;

const Content = styled.div`
  padding: 1rem;
`;

export default ({ children, data }) => (
  <Container>
    <Navigation title={data.site.siteMetadata.title} />
    <Content>{children()}</Content>
    <MobileNavigation />
  </Container>
);

injectGlobal`
  html {
    box-sizing: border-box;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow-x: hidden;
    position: relative;
    background: ${colors.bg};
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, li {
    color: rgb(0, 0, 0, 0.5);
  }

  img {
    display: inline-block;
    vertical-align: top;
  }

  pre, code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

`;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
