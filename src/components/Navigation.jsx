import React from 'react';
import { Link } from 'gatsby';
import { FaGithubSquare, FaBlogger, FaLinkedin, FaTwitterSquare, FaHome } from 'react-icons/fa';
import styled, { css } from 'react-emotion';
import config from '../../config/website';
import theme from '../../config/theme';

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  padding: 1rem 0 3rem 0;
  a {
    color: ${props => props.theme.colors.body_color};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${props => props.theme.brand.primary};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 1rem 0 3rem 0;
    flex-wrap: wrap;
  }
`;

const active = css`
  color: ${theme.brand.primary} !important;
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 2;
  }
`;

const Name = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  a {
    font-size: 23px;
    font-family: ${`${config.headerFontFamily}, sans-serif`};
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.body_color};
      text-decoration: none;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 1;
    flex: 1 0 100%;
    margin-bottom: 0.75rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a {
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`;

const Navigation = () => (
  <Wrapper>
    <Nav>
    <Link
        to="/"
        activeClassName={css`
          ${active};
        `}
      >
        <FaHome />
      </Link>
      <Link
        to="/about"
        activeClassName={css`
          ${active};
        `}
      >
        Work Experiences
      </Link>
      <a href="https://flyers-web.blogspot.com/" target="_blank">
        Blog & News
      </a>
      <a href="https://github.com/FlyersWeb" target="_blank">
        Personal projects
      </a>
    </Nav>
    <Name>
      <Link to="/">{config.siteTitle}</Link>
    </Name>
    <SocialMedia>
      <a href="https://flyers-web.blogspot.com" target="_blank" rel="noopener noreferrer">
        <FaBlogger />
      </a>
      <a href="https://www.github.com/FlyersWeb" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare />
      </a>
      <a href="https://twitter.com/FlyersWeb" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
      </a>
      <a href="https://www.linkedin.com/in/nassim-ben-ghmiss-2a333979" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </SocialMedia>
  </Wrapper>
);

export default Navigation;
