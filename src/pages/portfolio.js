import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project';

import { rhythm } from '../utils/typography';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const Header = styled.header`
  text-align: center;
  padding: 50px;
`;

export default ({ transition, data }) => (
  <div style={transition && transition.style}>
    <Header>
      <h1>Portfolio</h1>
      <p>A list of projects I have worked on.</p>
    </Header>
    <Container>
      <Project name="Chaga Midwest" sizes={data.chagaImage.sizes} />
      <Project name="Source News" sizes={data.newsImage.sizes} />
      <Project name="Restaurant App" sizes={data.restaurantImage.sizes} />
    </Container>
  </div>
);

export const query = graphql`
  query ProjectImageQuery {
    newsImage: imageSharp(id: {regex: "/news-app/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    chagaImage: imageSharp(id: {regex: "/chagamidwest/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    restaurantImage: imageSharp(id: {regex: "/restaurant/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
