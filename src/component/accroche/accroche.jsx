import React from 'react'

const Accroche = React.createClass({
  propTypes: {
    title : React.PropTypes.string.isRequired,
    content : React.PropTypes.string.isRequired,
    anchor : React.PropTypes.shape({
      href : React.PropTypes.string
    }),
  },
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p class="test-justify">
          {this.props.content}
        </p>
        <p><a class="btn" {...this.props.anchor}>Know more &raquo;</a></p>
      </div>
    );
  }
});

module.exports = Accroche;