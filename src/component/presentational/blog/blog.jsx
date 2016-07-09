import React from 'react'
import Helmet from 'react-helmet'

import { Row, Col } from 'react-bootstrap';

import Jumbotron from '../jumbotron/customjumbotron.jsx'
import Footer from '../footer/footer.jsx'

import Thumb from '../thumb/thumb.jsx'


const thumbs = [{
  title : "angular-symfony",
  content : `<a href="https://github.com/FlyersWeb/angular-symfony" class="ng-binding">https://github.com/FlyersWeb/angular-symfony</a>
  <p class="ng-binding">
    Project Bootstrap for an angularJS + Symfony project
  </p>`
  ,
  anchor : {
    href : "https://github.com/FlyersWeb/angular-symfony.git"
  },
}, {
  title : "angular-symfony",
  content : `<a href="https://github.com/FlyersWeb/angular-symfony" class="ng-binding">https://github.com/FlyersWeb/angular-symfony</a>
  <p class="ng-binding">
    Project Bootstrap for an angularJS + Symfony project
  </p>`
  ,
  anchor : {
    href : "https://github.com/FlyersWeb/angular-symfony.git"
  },
}, {
  title : "angular-symfony",
  content : `<a href="https://github.com/FlyersWeb/angular-symfony" class="ng-binding">https://github.com/FlyersWeb/angular-symfony</a>
  <p class="ng-binding">
    Project Bootstrap for an angularJS + Symfony project
  </p>`
  ,
  anchor : {
    href : "https://github.com/FlyersWeb/angular-symfony.git"
  },
}, {
  title : "angular-symfony",
  content : `<a href="https://github.com/FlyersWeb/angular-symfony" class="ng-binding">https://github.com/FlyersWeb/angular-symfony</a>
  <p class="ng-binding">
    Project Bootstrap for an angularJS + Symfony project
  </p>`
  ,
  anchor : {
    href : "https://github.com/FlyersWeb/angular-symfony.git"
  },
}
]

const Blog = React.createClass({
  renderAllThumbs() {
    return thumbs.map((thumb, index) => {
      return (
        <Col key={"col-" + index} xs={6} md={4}>
          <Thumb title={thumb.title}
            anchor={thumb.anchor}
            content={thumb.content}
            key={"thumb-" + index}
            index={index}
          />
        </Col>
      );  
    }, this)
  },

  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron />
          <Row>
            { this.renderAllThumbs() }
          </Row>
        </div>
      </div>
    );
  }
});

module.exports = Blog;