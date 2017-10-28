import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const StyledLink = styled(Link)`color: palevioletred;`;

const ListLink = ({ to, children, className}) => (
  <li className={className}>
    <StyledLink className={className} to={to}>
      {children}
    </StyledLink>
  </li>
);

const StyledListLink = styled(ListLink)`
  display: inline-block;
  margin-right: 0.35rem;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 1.25rem 1rem;
`;

const Header = styled.header`
  margin-bottom: 1.5rem;
`;

const SiteTitle = styled.h3`display: inline-block;`;

const NavList = styled.ul`
  list-style: none;
  float: right;
`;
// Layout Component
// This layout is render on every page, I think children() retrieves the current page and renders the component, so you dont need to wrap every page this Layout.
export default ({ children, data }) => (
  <StyledContainer>
    <Header>
      <SiteTitle>
        {data.site.siteMetadata.title}
      </SiteTitle>
      <NavList>
        <StyledListLink to="/">Home</StyledListLink>
        <StyledListLink to="/blog">Blog</StyledListLink>
        <StyledListLink to="/about">About</StyledListLink>
        <StyledListLink to="/contact">Contact</StyledListLink>
      </NavList>
    </Header>
    {children()}
  </StyledContainer>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
