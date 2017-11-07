import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors } from '../theme';

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 325px;
  justify-content: center;
  align-items: center;
  height: 325px;
  margin: 1px;
  background-color: ${colors.dark_accent};
`;

const ProjectImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const ProjectTitle = styled.h2`
  color: ${colors.primary};
`;

// <Img sizes={sizes} title={`Image of ${name}`} />
export default ({ name, sizes }) => (
  <Container>
    <ProjectTitle>{name}</ProjectTitle>
  </Container>
);
