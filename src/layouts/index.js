import 'prismjs/themes/prism-solarizedlight.css';
import React from 'react';
import styled, { injectGlobal } from 'styled-components';


import Navigation from '../components/Navigation';
import MobileNavigation from '../components/MobileNavigation';


import { rhythm } from '../utils/typography';
import { colors } from '../theme';

const App = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`;

class Index extends React.Component {
  render() {
    // const path = this.props.location.pathname;
    return (
      <App>
        <Navigation
          title={this.props.data.site.siteMetadata.title}
        />
        {this.props.children()}
        <MobileNavigation />
      </App>
    );
  }
}

injectGlobal`
  html {
    box-sizing: border-box;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow-x: hidden;
    position: relative;
    background-color: ${colors.bg};
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
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

export default Index;
