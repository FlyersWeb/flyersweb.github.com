import React from 'react'

import { Row, Col } from 'react-bootstrap'

const Thumb = React.createClass({
  propTypes: {
    title : React.PropTypes.string.isRequired,
    content : React.PropTypes.string.isRequired,
    anchor : React.PropTypes.shape({
      href : React.PropTypes.string
    }),
  },
  render() {
    return (
      <Col sm={6} md={4}>
        <h2>{this.props.title}</h2>
        <p class="test-justify">
          {this.props.content}
        </p>
        <p><a class="btn" {...this.props.anchor}>View details &raquo;</a></p>
      </Col>
    );
  }
});

module.exports = Thumb;