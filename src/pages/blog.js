import React from "react";
import styled from "styled-components";

import BlogPostPreview from '../components/BlogPostPreview';

export default ({ data }) => (
  <div>
    <h1>Learning Blog</h1>
    <p>{data.allMarkdownRemark.totalCount} Posts</p>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogPostPreview
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

export const query = graphql`query BlogQuery {
           allMarkdownRemark(
             sort: {
               fields: [frontmatter___date],
               order: DESC
            }) {
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
         }`;

