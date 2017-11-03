import React from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import {colors} from '../theme';
// import {generator} from 'uigradients';
import NavBar from '../components/NavBar';

const Main = styled.div`
  margin: 0 auto;
  padding: 2rem 0.5rem;
  max-width: 1000px;
`;

export default ({children, data}) => (
  <Main>
    <NavBar title={data.site.siteMetadata.title} />
    {children()}
  </Main>
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
  background-color: ${colors.secondary}
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

ul, ol {
  list-style: none;
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
