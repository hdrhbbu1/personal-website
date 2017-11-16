import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Navigation from '../components/Navigation';
import MobileNavigation from '../components/MobileNavigation';
import PageHeader from '../components/PageHeader';

import { rhythm } from '../utils/typography';
import { colors } from '../theme';

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  margin: ${rhythm(2)} auto;
  padding: ${rhythm(1)};
  height: 100vh;
  max-width: 1000px;
`;

class Index extends React.Component {
  render() {
    const path = this.props.location.pathname;
    let title;
    switch (path) {
      case '/':
        title = 'User Interface / Web Developer';
        break;
      case '/about':
        title = 'About';
        break;
      case '/blog':
        title = 'Blog';
        break;
      case '/contact':
        title = 'Contact';
        break;
      case '/portfolio':
        title = 'Portfolio';
        break;
      default:
        title = 'Header';
        break;
    }
    return (
      <Container>
        <Navigation hasPageHeader title={this.props.data.site.siteMetadata.title} />
        <PageHeader display title={title} />
        <Content>{this.props.children()}</Content>
        <MobileNavigation />
      </Container>
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
    font-weight: 300;
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
