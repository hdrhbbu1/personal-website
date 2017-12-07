import React from 'react';
import BlogPostPreview from '../components/BlogPostPreview';

import Header from '../components/Header';
import { colors } from '../theme';

export default ({ data, transition }) => (
  <div style={transition && transition.style}>
    <Header>
      <h1>Blog</h1>
      <p>{data.allMarkdownRemark.totalCount} Posts</p>
    </Header>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogPostPreview
          key={node.frontmatter.title}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          timeToRead={node.timeToRead}
          slug={node.fields.slug}
        />
      ))}
    </div>
  </div>
);

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
