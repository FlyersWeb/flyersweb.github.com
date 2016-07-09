import React from 'react'

import { Row, Col } from 'react-bootstrap';

import Icon from '../icon/icon.jsx'

const icons = {
  github : {
    url: {
      href : "https://www.github.com/FlyersWeb",
    },
    properties : {
      src : require("../../../assets/social/github.jpg"),
      width : 128,
      height : 128
    }
  }, twitter : {
    url: {
      href : "https://twitter.com/FlyersWeb",
    },
    properties : {
      src : require("../../../assets/social/twitter.png"),
      width : 128,
      height : 128
    }
  }, flickr : {
    url: {
      href : "https://www.flickr.com/photos/canardodu/",
    },
    properties : {
      src : require("../../../assets/social/flickr.png"),
      width : 105,
      height : 105
    }
  }, linkedin : {
    url: {
      href : "https://www.linkedin.com/pub/nassim-ben-ghmiss/79/339/2a3",
    },
    properties : {
      src : require("../../../assets/social/linkedin.png"),
      width : 110,
      height : 110
    }
  }
}

const Footer = React.createClass({
  renderAllIcons() {
    return Object.keys(icons).map((k, index) => {
      const icon = icons[k];
      return (
        <Col key={"col-" + index} sm={6} md={3}>
          <Icon imageUrl={icon.url}
            image={icon.properties}
            key={"icon-" + index}
            index={index}
          />
        </Col>
      );
    }, this);
  },

  render() {
    return (
      <div>
        <Row>
          { this.renderAllIcons() }
        </Row>
      </div>
    );
  }
});

module.exports = Footer;