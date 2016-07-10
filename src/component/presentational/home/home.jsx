import React from 'react'

import { Row, Col } from 'react-bootstrap';

import Jumbotron from '../jumbotron/customjumbotron.jsx'
import Footer from '../footer/footer.jsx'

import FilterThumb from '../../container/filter-thumb/filter-thumb'

const Home = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron />
          <FilterThumb />
          <Footer />
        </div>
      </div>
    );
  }
});

module.exports = Home;