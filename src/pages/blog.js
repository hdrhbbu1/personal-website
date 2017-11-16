import React from 'react';

import BlogPostPreview from '../components/BlogPostPreview';

export default ({ data, transition }) => (
  <div style={transition && transition.style}>
    <p>{data.allMarkdownRemark.totalCount} Posts</p>
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
