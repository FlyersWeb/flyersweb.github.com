import React from 'react'

import Jumbotron from '../jumbotron/customjumbotron.jsx'
import Footer from '../footer/footer.jsx'

import FilterThumb from '../../container/filter-thumb/filter-thumb'

const Home = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron
            title="FullStack Web Developer"
            content="Welcome to my Website. I'm a web developer and software designer. I love to explore new techs. I also love computer security and devices hacking. I'd like to share my researchs, projects and portfolio on my website."
          />
          <FilterThumb />
          <Footer />
        </div>
      </div>
    );
  }
});

module.exports = Home;