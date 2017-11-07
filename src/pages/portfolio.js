import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-top: 20px;
`;

export default ({ transition, data }) => (
  <div style={transition && transition.style}>
    <Container>
      <Project name="Chaga Midwest" sizes={data.chagaImage.sizes} />
      <Project name="Source News" sizes={data.newsImage.sizes} />
      <Project name="Restaurant App" sizes={data.restaurantImage.sizes} />
      <Project name="HEF" />
    </Container>
  </div>
);

export const query = graphql`query ProjectImageQuery {
           newsImage: imageSharp(id: {regex: "/news-app/"}) {
             sizes(maxWidth: 350) {
               ...GatsbyImageSharpSizes
             }
           }
           chagaImage: imageSharp(id: {regex: "/chagamidwest/"}) {
             sizes(maxWidth: 350) {
               ...GatsbyImageSharpSizes
             }
           }
           restaurantImage: imageSharp(id: {regex: "/restaurant/"}) {
             sizes(maxWidth: 350) {
               ...GatsbyImageSharpSizes
             }
           }
         }`;
