import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

const StyledBlock = styled.div`
  margin: 0;
  width: 100%;
  height: auto;
  padding: ${rhythm(1)};
  ${sizes.Tablet} {
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    margin: ${rhythm(1)} auto;
    border-left: 3px solid;
    border-image: linear-gradient(to bottom, #fc466b, #3f5efb);
    border-image-slice: 2;
    border-radius: 2px;
    background-color: ${colors.bg};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
  }
`;

const Title = styled.h2`
  position: relative;
  text-align: center;
  color: ${colors.primary};
  ${sizes.Tablet} {
    position: absolute:
    top: 0;
    margin: ${rhythm(1)} 0;
    align-self: center;
    transition: all 0.1s cubic-bezier(0.57, 0.21, 0.69, 1.25);
  }
`;

const Text = styled.div`
  padding: ${rhythm(1 / 2)};
  transition: all 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
  ${sizes.Desktop} {
    padding: ${rhythm(1)};
  }
`;

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
    };
  }

  render() {
    const { showText } = this.state;
    return (
      <StyledBlock>
        <Title showText={showText}>{this.props.title}</Title>
        {showText && <Text>{this.props.children}</Text>}
      </StyledBlock>);
  }
}

export default Block;
