import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

const Container = styled.div`
  position: relative;
  background-color: ${props => props.color};
  padding: ${rhythm(1)};
  ${sizes.Tablet} {
    padding: ${rhythm(5)};
  }
`;

const Image = styled(Img)`
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  ${sizes.Tablet} {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  /* Adjust image positioning (if image covers area with defined height) and add font-family for polyfill */
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'; // needed for IE9+ polyfill
  }
`;

const ProjectTitle = styled.h2`
  color: ${colors.primary};
`;

// <Img sizes={sizes} title={`Image of ${name}`} />
export default ({ name, sizes, color }) => (
  <Image sizes={sizes} />
);
