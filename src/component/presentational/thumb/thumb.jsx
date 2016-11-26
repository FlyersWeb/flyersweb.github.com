import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'

const Thumb = React.createClass({
  propTypes: {
    title : React.PropTypes.string.isRequired,
    content : React.PropTypes.string.isRequired,
    anchor : React.PropTypes.shape({
      href : React.PropTypes.string
    }),
  },
  render() {
    function createMarkup(value) {
      return {__html: value}
    }
    return (
      <Col sm={4} md={4}>
        <h3>{this.props.title}</h3>
        <p>
          <div dangerouslySetInnerHTML={createMarkup(this.props.content)} />
        </p>
        <p>
          <a {...this.props.anchor}>
          <Button bsStyle="info">See more &raquo;</Button>
          </a>
        </p>
      </Col>
    );
  }
});

module.exports = Thumb;