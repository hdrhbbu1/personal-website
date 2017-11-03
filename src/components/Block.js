import React from 'react';
import styled from 'styled-components';
import {colors} from '../theme';

import {Transition, TransitionGroup} from 'react-transition-group';

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
  display: flex;
  flex-flow: column nowrap;
  margin: 20px auto;
  height: ${props => (props.height ? `${props.height}px` : '300px')};
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.primary ? colors.primary : colors.snow)};
  box-shadow: 10px 10px
    ${props => (props.primary ? colors.snow : colors.primary)};
  cursor: pointer;
  overflow: scroll;
  transition: all 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
`;

const Title = styled.h2`
  transform: ${props =>
    props.showText ? `translate(0px, 0px)` : `translate(0px, 130px)`};
  align-self: center;
  color: ${colors.primary};
  transition: all 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
`;

const Text = styled.div`
  padding: 5px 10px;
  color: black;
  transition: all 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
`;

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 300,
      showText: false
    };
    this.expandBox = this.expandBox.bind(this);
  }

  expandBox(e) {
    e.preventDefault();
    let height = this.state.height;
    if (height === 600) {
      height = 300;
    }
    else {
      height = 600;
    }
    this.setState(({height, showText: !this.state.showText}));
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
