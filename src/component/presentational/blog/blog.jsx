import React from 'react'

import Jumbotron from '../jumbotron/customjumbotron.jsx'
import Footer from '../footer/footer.jsx'

import FilterThumb from '../../container/filter-thumb/filter-thumb'

const Blog = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron
            title="Researchs"
            content="You'll see my blog posts there, it's mainly about web development, security and/or inspirations. I'm also interested in crypto currencies and artistic stuff. You may find some interesting stuff if you're feeling to spare some time searching."
          />
          <FilterThumb filter='SHOW_BLOG' />
        </div>
      </div>
    );
  }
});

module.exports = Blog;