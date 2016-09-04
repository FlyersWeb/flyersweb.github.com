import React from 'react'
import Helmet from 'react-helmet'

import Jumbotron from '../jumbotron/customjumbotron.jsx'
import Footer from '../footer/footer.jsx'

import FilterThumb from '../../container/filter-thumb/filter-thumb'

const Project = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron
            title="Projects"
            content="This page will show you my current GitHub projects. Feel free to participate, it would be of a great use. These are only projects I work on as free time activities."
          />
          <FilterThumb filter='SHOW_PROJECT' />
        </div>
      </div>
    );
  }
});

module.exports = Project;