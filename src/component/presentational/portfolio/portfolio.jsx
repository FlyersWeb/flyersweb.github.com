import React from 'react'
import Helmet from 'react-helmet'

import Jumbotron from '../jumbotron/customjumbotron.jsx'
import Footer from '../footer/footer.jsx'

import FilterThumb from '../../container/filter-thumb/filter-thumb'

const Portfolio = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron
            title="Portfolio"
            content="My Portfolio will show some professional projects I've worked on. It also presents some of my artistic creations made as a hobby. I like photography and 2d/3d design but mostly as free time activities."
          />
          <FilterThumb filter='SHOW_PORTFOLIO' />
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;