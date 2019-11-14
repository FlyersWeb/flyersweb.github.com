import React from 'react';
import styled from 'react-emotion';
import { FaGithubSquare, FaBlogger, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Wrapper = styled.footer`
  margin: 5rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`;

const Footer = () => (
  <Wrapper>
    <p>
      <a href="https://www.linkedin.com/in/nassim-ben-ghmiss-2a333979" target="_blank">
        <FaLinkedin size={128} color="black" />
      </a>
      <a href="https://twitter.com/FlyersWeb" target="_blank">
        <FaTwitterSquare size={128} color="black" />
      </a>
      <a href="https://www.github.com/FlyersWeb" target="_blank">
        <FaGithubSquare size={128} color="black" />
      </a>
      <a href="https://flyers-web.blogspot.com" target="_blank">
        <FaBlogger size={128} color="black" />
      </a>
    </p>
    Copyright &copy; {(new Date()).getFullYear()}. All right reserved.
  </Wrapper>
);

export default Footer;
