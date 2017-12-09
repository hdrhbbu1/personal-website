import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project';
import Header from '../components/Header';

import { rhythm } from '../utils/typography';
import { colors } from '../theme';

export default ({ transition, data }) => (
  <div style={transition && transition.style}>
    <Header>
      <h1>Portfolio</h1>
      <p>A list of projects I have worked on.</p>
    </Header>
    <Project id={1} name="Chaga Midwest" sizes={data.chagaImage.sizes} color={colors.project1} />
    <Project id={2} name="Source News" sizes={data.newsImage.sizes} color={colors.project2} />
    <Project id={3} name="HEF" sizes={data.hefImage.sizes} color={colors.project3} />
  </div>
);

export const query = graphql`
  query ProjectImageQuery {
    newsImage: imageSharp(id: {regex: "/news/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    chagaImage: imageSharp(id: {regex: "/chaga/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    hefImage: imageSharp(id: {regex: "/hef/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
