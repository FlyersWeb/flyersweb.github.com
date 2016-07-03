import React from 'react'

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
      <div>
        <h2>{this.props.title}</h2>
        <p class="test-justify">
          {this.props.content}
        </p>
        <p><a class="btn" {...this.props.anchor}>View details &raquo;</a></p>
      </div>
    );
  }
});

module.exports = Thumb;