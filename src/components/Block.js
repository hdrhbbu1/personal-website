import React from 'react';
import styled from 'styled-components';
import { Transition, TransitionGroup } from 'react-transition-group';

import { colors, sizes } from '../theme';

const MIN_HEIGHT = 300;
const MAX_HEIGHT = 'auto';
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

const BlockS = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  margin: 20px auto;
  height: ${props => props.height && `${props.height}px`};
  border-left: 3px solid ${colors.primary};
  border-radius: 5px;
  width: 100%;
  background-color: ${colors.bg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 3px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &:hover::after {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 1.55em;
  transform: ${props =>
    (props.showText ? 'translate(0px, 8px)' : 'translate(0px, 130px)')};
  align-self: center;
  color: ${colors.black};
  font-weight: ${props => (props.weight && props.weight)};
  transition: all 0.2s cubic-bezier(0.57, 0.21, 0.69, 1.25);
`;

const Text = styled.div`
  padding: 15px;
  transition: all 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
  ${sizes.Desktop} {
    padding: 25px;
  }
`;

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: MIN_HEIGHT,
      weight: 300,
      showText: false,
    };
    this.expandBox = this.expandBox.bind(this);
  }

  expandBox(e) {
    e.preventDefault();
    const { height, weight, showText } = this.state;
    this.setState({
      height: height === MAX_HEIGHT ? MIN_HEIGHT : MAX_HEIGHT,
      weight: weight === 300 ? 700 : 300,
      showText: !showText,
    });
  }

  render() {
    const { height, weight, showText } = this.state;
    return (
      <BlockS height={height} onClick={this.expandBox}>
        <Title weight={weight} showText={showText}>{this.props.title}</Title>
        <Fade in={showText}>
          {showText && <Text>{this.props.children}</Text>}
        </Fade>
      </BlockS>);
  }
}

export default Block;
