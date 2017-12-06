import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { colors } from '../theme';

const Card = styled.div`
  display: flex;
  position: relative;
  flex: 1 1 425px;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin: ${rhythm(1 / 2)};
  border-radius: 4px;
  background-color: ${colors.bg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ProjectImage = styled(Img)`
  position: absolute;
  margin: ${rhythm(1 / 2)};
`;
const other = {
  height: '600px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
};
const ProjectTitle = styled.h2`
  color: ${colors.primary};
`;

// <Img sizes={sizes} title={`Image of ${name}`} />
export default ({ name, sizes, color }) => (
  <Card>
    <ProjectImage sizes={sizes} />
    <ProjectTitle>{name}</ProjectTitle>
  </Card>
);
