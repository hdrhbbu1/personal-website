import React from 'react';
import styled from 'styled-components';
import NavLink from '../components/NavLink';

const List = styled.ul`
  display: flex;
  list-style: none;
`;

class NavList extends React.Component {
  render() {
    return <List>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </List>;
  }
}

export default NavList;