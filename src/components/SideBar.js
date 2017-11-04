import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {colors} from '../theme';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 200px;
  background: ${colors.primary};
  color: ${colors.primary};
  border-radius: 4px;
  background-color: ${props => (props.primary ? colors.primary : colors.snow)};
  box-shadow: 10px 12px
    ${props => (props.primary ? colors.snow : colors.primary)};
  overflow: scroll;
  > ul {
    list-style: none;
  }
`;

class SideBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>Resume</h1>
        <ul>
          <li>Experience</li>
          <li>Skill</li>
          <li>Education</li>
        </ul>
      </Wrapper>
    )
  }
}

export default SideBar;