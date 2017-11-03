import React from 'react';
import styled from 'styled-components';
import NavLink from '../components/NavLink';
import {colors} from '../theme';


const List = styled.ul`
  display: flex;
  flex: 0 1 100%;
  align-items: center;
  height: 65px;
  margin: 0;
  margin-bottom: 25px;
  border-radius: 7px;
  list-style: none;
  color: ${colors.primary};
  font-size: 1.1em;
  box-shadow: 5px 10px 20px -20px rgba(59, 89, 153, 1);
`;

const SiteTitle = styled.h2`  
  font-size: 1.4em;
  font-weight: 300;
`;

class NavBar extends React.Component {
  render() {
    return <List role="navigation">
        <NavLink left to="/">
          <SiteTitle>{this.props.title}</SiteTitle>
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </List>;
  }
}

export default NavBar;