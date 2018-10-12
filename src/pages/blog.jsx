import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';
import styled from 'react-emotion';

const Wrapper = styled.div`
  text-align: justify;
`;

const Blog = () => (
  <Layout>
    <Helmet title={`Blog | ${config.siteTitle}`} />
    <Header>Blog</Header>
    <Container type="text">
      <Wrapper>
        <h1>Check my Blog</h1>
        <p>
          Since 2011 I've been writing <strong>technological</strong> and <strong>inspirational</strong>
          posts about <strong>programming</strong> and rarely <strong>politics</strong> whenever I fealed
          to say loud what shall be said. Ultimately I've been touched by
          the beauty of <strong>functional programming</strong> and <strong>concurrency</strong> so you might
          find this topics.
        </p>
        <p>
          Feel free to have a look at my <strong><a href="https://flyers-web.blogspot.com" target="_blank" rel="noopener noreferrer">Blogger</a></strong>.
        </p>
      </Wrapper>
    </Container>
  </Layout>
);

export default Blog;
