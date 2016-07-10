import React from 'react'
import Helmet from 'react-helmet'

import { Row, Col } from 'react-bootstrap';

import Jumbotron from '../jumbotron/customjumbotron.jsx'
import Footer from '../footer/footer.jsx'

import FilterThumb from '../../container/filter-thumb/filter-thumb'

const Blog = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron />
          <FilterThumb filter='SHOW_BLOG' />
        </div>
      </div>
    );
  }
});

module.exports = Blog;