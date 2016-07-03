import React from 'react'

import { Row, Col } from 'react-bootstrap';

import Jumbotron from '../../component/jumbotron/customjumbotron.jsx'
import Footer from '../../component/footer/footer.jsx'

import Thumb from '../../component/thumb/thumb.jsx'


const thumbs = [{
  title : "Coding",
  content : `I love coding and software design. Using new web programming techs to fulfill features necessity 
    I like to explore new tools and ideas. Using NodeJS, PHP5, C# or Python for back-end developments based on 
    new database schemes as of Redis, MongoDB, Big Table or simply SQL like. I like to focus on back-end development 
    but I also do front-end using AngularJS, ReactJS or simply native Javascript.`
  ,
  anchor : {
    href : "/project"
  },
}, {
  title : "Security",
  content : `I love to discover new fields and techniques. That´s why I really appreciated team based Capture the Flag 
  competition wargames. These experiences really improved my skills in computer security.`
  ,
  anchor : {
    href : "/blog"
  },
}, {
  title : "Quality",
  content : `It is hard for developers to make bulletproof software, that's why I'm really interested by automated 
  quality insurance tools and release chain management. Thanks to new stuff around as of devops and scrum management, 
  quality software is possible with some work.`
  ,
  anchor : {
    href : "/portfolio"
  },
}]

const Home = React.createClass({
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
          <Footer />
        </div>
      </div>
    );
  }
});

module.exports = Home;