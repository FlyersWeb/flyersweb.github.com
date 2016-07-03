import React from 'react'

import Icon from './icon/icon.jsx'

const icons = {
  github : {
    url: {
      href : "https://www.github.com/FlyersWeb",
    },
    properties : {
      src : require("../../assets/social/github.jpg"),
      width : 128,
      height : 128
    }
  }, twitter : {
    url: {
      href : "https://twitter.com/FlyersWeb",
    },
    properties : {
      src : require("../../assets/social/twitter.png"),
      width : 128,
      height : 128
    }
  }, flickr : {
    url: {
      href : "https://www.flickr.com/photos/canardodu/",
    },
    properties : {
      src : require("../../assets/social/flickr.png"),
      width : 105,
      height : 105
    }
  }, linkedin : {
    url: {
      href : "https://www.linkedin.com/pub/nassim-ben-ghmiss/79/339/2a3",
    },
    properties : {
      src : require("../../assets/social/linkedin.png"),
      width : 110,
      height : 110
    }
  }
}

const Footer = React.createClass({
  render() {
    return (
      <div>
        <Icon imageUrl={icons.github.url}
          image={icons.github.properties}
        />
        <Icon imageUrl={icons.twitter.url}
          image={icons.twitter.properties}
        />
        <Icon imageUrl={icons.flickr.url}
          image={icons.flickr.properties}
        />
        <Icon imageUrl={icons.linkedin.url}
          image={icons.linkedin.properties}
        />
      </div>
    );
  }
});

module.exports = Footer;