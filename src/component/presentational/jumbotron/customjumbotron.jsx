import React from 'react'

import { Jumbotron } from 'react-bootstrap';

const CustomJumbotron = React.createClass({
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>Welcome to my Website. I'm a web developer and software designer. I love to explore new techs and funny stuff around. I also love computer security and devices hacking. I'll present my researchs, projects and portfolio on this website.</p>
        </Jumbotron>
      </div>
    );
  }
});

module.exports = CustomJumbotron;