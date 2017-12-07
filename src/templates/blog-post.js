import React from 'react';
import { colors } from '../theme';
import Header from '../components/Header';


export default ({ data, transition }) => {
  const post = data.markdownRemark;
  return (
    <div style={transition && transition.style}>
      <Header>
        <h1>{post.frontmatter.title}</h1>
      </Header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
