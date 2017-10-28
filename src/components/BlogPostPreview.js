import React from 'react';

import Link from 'gatsby-link';
import styled from 'styled-components';

const PostPreview = styled.div`
  margin-bottom: 20px;
`
const Title = styled.h3`
  margin-bottom: 20px;
  display: inline-block;
  border-bottom: 3px solid palevioletred;
`;
const Excerpt = styled.p`
  margin-bottom: 10px
`
const MetaData = styled.span`
  color: #BBB;
`;
const BlogLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default ({ title, date, excerpt, timeToRead, slug }) => {
  return <PostPreview>
      <Title><BlogLink to={slug}>{title}</BlogLink></Title>
      <Excerpt>{excerpt}</Excerpt>
      <MetaData>
        {date} • {timeToRead} minute read
      </MetaData>
    </PostPreview>;
}