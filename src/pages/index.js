import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {colors} from '../theme';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3.5em;
`;

const Title = styled.h1`
  font-size: ${props => (props.large ? '1.8em' : '1.5em')};
  text-align: center;
  color: ${colors.primary};
  transition: 0.85s all ease;
`;

const Text = styled.p`color: ${colors.snow};`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px auto;
  height: 200px;
  width: 100%;
  border-radius: 3px;
  background-color: ${props => (props.primary ? colors.primary : colors.snow)};
  box-shadow: 10px 10px
    ${props => (props.primary ? colors.snow : colors.primary)};
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export default ({transition}) => (
  <div style={transition && transition.style}>
    <Wrapper>
      <Block>
        <Title>Web Developer</Title>
        <Text />
      </Block>
      <Block>
        <Title>Experience</Title>
      </Block>
      <Block>
        <Title>Skills</Title>
      </Block>
      <Block>
        <Title>Education</Title>
      </Block>
      <Block>
        <Title>Projects</Title>
      </Block>
    </Wrapper>
  </div>
);
