import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import config from '../particlejs';
import { colors, sizes } from '../theme';


const Header = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  height: 100vh;
  overflow: hidden;
  background: ${colors.primary_gradientv3};
  > h1 {
    font-weight: 300;
  }
`;

const CenterScreen = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: white;
`;

const Svg = styled.svg`
  width: 100vmin;
  margin: 0 auto;
  display: block;
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: 2px;
`;

export default ({ transition, data }) => (
  <div style={transition && transition.style}>
    <Particles
      params={config}
      style={{
        position: 'absolute', top: 0, left: 0, background: 'transparent', zIndex: 1,
      }}
    />
    <CenterScreen>
      <Svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stopColor="#fc466b" />
            <stop offset="95%" stopColor="#3f5efb" />
          </linearGradient>
        </defs>
        <g>
          <Circle cx="50" cy="50" r="25" stroke="url(#gradient)" />
          <text x="49.5" y="55" fontSize="16px" fontWeight="400" fontFamily="Helvetica Neue" textAnchor="middle" fill="url(#gradient)">MTR</text>
        </g>
      </Svg>
    </CenterScreen>
  </div>
);
