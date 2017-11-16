import React from 'react';
import styled from 'styled-components';
import { Transition, TransitionGroup } from 'react-transition-group';

import { rhythm } from '../utils/typography';
import { colors } from '../theme';

import Poly from '../components/Poly';

const Header = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: relative;
  height: 350px;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.dark_accent};
  z-index: -10;
`;

const Content = styled.div`
  padding: ${rhythm(1 / 2)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-weight: 300;
  color: ${colors.bg};
  flex-basis: 650px;
  transition: all 0.3s ease-in-out;
`;

// Transition
const duration = 250;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default ({
  title, display, bgColor,
}) => (

  <Header display={display}>
    <Background />
    <Content>
      <H1>{ title }</H1>
      <div>
        <Poly />
      </div>
    </Content>
  </Header>
);
