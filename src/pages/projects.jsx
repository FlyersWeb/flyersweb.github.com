import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';
import styled from 'react-emotion';

const Wrapper = styled.p`
  text-align: justify;
`;

const Projects = () => (
  <Layout>
    <Helmet title={`Projects | ${config.siteTitle}`} />
    <Header>Projects</Header>
    <Container type="text">
      <Wrapper>
        <h1>See my opensource Projects</h1>
        <p>
          I've been sharing my public projects on Github where
          you'll find some of my most advanced projects like
          a <strong>torrent network crawler</strong>, a bootstrap <strong>Symfony2 +
          AngularJS</strong> project or a <strong>Pong game</strong> in Javascript.
      </p>
      <p>
        Feel free to have a look at my <strong><a href="https://www.github.com/FlyersWeb" target="_blank" rel="noopener noreferrer">Github</a></strong>.
      </p>
      </Wrapper>
    </Container>
  </Layout>
);

export default Projects;
