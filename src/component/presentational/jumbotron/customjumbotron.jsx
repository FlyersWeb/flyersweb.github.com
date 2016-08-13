import React from 'react'

import { Jumbotron } from 'react-bootstrap';

const CustomJumbotron = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired
  },

  render() {
    return (this.props.content) ? (
      <div>
        <Jumbotron>
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
        </Jumbotron>
      </div>
    ) : null;
  }
});

module.exports = CustomJumbotron;