import React, { PropTypes } from 'react'

const Icon = React.createClass({
  propTypes: {
    imageUrl : React.PropTypes.shape({
      href : React.PropTypes.string,
      target : React.PropTypes.string
    }),
    image : React.PropTypes.shape({
      src : React.PropTypes.string,
      width : React.PropTypes.number,
      height : React.PropTypes.number
    }).isRequired
  },

  render() {
    return (
      <div>
        <div className="footer-icon">
          {this.props.imageUrl && 
            <a {...this.props.imageUrl}>
              <img {...this.props.image} />
            </a>
          }
        </div>
      </div>
    );
  }
});

module.exports = Icon;