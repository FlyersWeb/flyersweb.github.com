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
      <Col sm={6} md={4}>
        <h3>{this.props.title}</h3>
        <div dangerouslySetInnerHTML={createMarkup(this.props.content)} />
        <p>
          <a class="btn" {...this.props.anchor}>
          <Button bsStyle="info">View more &raquo;</Button>
          </a>
        </p>
      </Col>
    );
  }
});

module.exports = Thumb;