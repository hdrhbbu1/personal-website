import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

const PostPreview = styled.div`
  position: relative;
  padding: ${rhythm(1 / 2)};
  margin: ${rhythm(1.5)};
  ${sizes.Tablet} {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: ${rhythm(2)};
    margin: ${rhythm(1)} ${rhythm(1 / 2)};
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0;
      border-radius: 6px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    &:hover::after {
      opacity: 1;
    }
  }
`;
const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 2)};
  display: inline-block;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #fc466b, #3f5efb);
  }
`;
const Excerpt = styled.p`
  margin-bottom: 10px;
`;
const MetaData = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;
const BlogLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default ({
  title, date, excerpt, timeToRead, slug,
}) => (
  <PostPreview>
    <Title>
      <BlogLink to={slug}>{title}</BlogLink>
    </Title>
    <Excerpt>{excerpt}</Excerpt>
    <MetaData>
      {date} • {timeToRead} minute read
    </MetaData>
  </PostPreview>
);
