import React from 'react';
import styled from 'styled-components';
import {colors} from '../theme';

import {Transition, TransitionGroup} from 'react-transition-group';

const MIN_HEIGHT = 400;
const MAX_HEIGHT = 2000;
const duration = 350;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: {opacity: 0},
  entered: {opacity: 1},
  exiting: {opacity: 0}
};

const Fade = ({in: inProp, children}) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}>
        {children}
      </div>
    )}
  </Transition>
);

const BlockS = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin: 20px auto;
  min-height: 300px;
  max-height: ${props => props.height && `${props.height}px`};
  width: 50vw;
  border-left: 4px solid ${colors.primary};
  border-radius: 3px;
  background-color: ${props => (props.primary ? colors.primary : colors.snow)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.4s cubic-bezier(0.57, 0.21, 0.69, 1.25);
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 3px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &:hover::after {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 1.8em;
  transform: ${props =>
    props.showText ? `translate(0px, 8px)` : `translate(0px, 130px)`};
  align-self: center;
  color: ${colors.primary};
  transition: all 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
`;

const Text = styled.div`
  padding: 5px 15px;
  color: black;
  transition: all 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
`;

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: MIN_HEIGHT,
      showText: false
    };
    this.expandBox = this.expandBox.bind(this);
  }

  expandBox(e) {
    e.preventDefault();
    let height = this.state.height;
    this.setState({
      height: height === MAX_HEIGHT ? MIN_HEIGHT : MAX_HEIGHT,
      showText: !this.state.showText
    });
  }

  render() {
    const {height, showText} = this.state;
    return <BlockS height={height} onClick={this.expandBox}>
        <Title showText={showText}>{this.props.title}</Title>
        <Fade in={showText}>
          {showText && <Text>{this.props.children}</Text>}
        </Fade>
      </BlockS>;
  }
}

export default Block;
