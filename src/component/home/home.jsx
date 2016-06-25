import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../../component/navbar/customnavbar.jsx'
import Jumbotron from '../../component/jumbotron/customjumbotron.jsx'

const Home = React.createClass({
  render : () => {
    return (
      <div>
        <Helmet
          htmlAttributes={{"lang": "fr"}}
          title="Flyers Web Developer Website"
          meta={[
            {"name": "description", "content": "A web developer website showing his works and thoughts on Javascript, Web, W3C and more..."},
          ]}
        />
        <Navbar />
        <div className="container">
          <Jumbotron />
        </div>
      </div>
    );
  }
});

module.exports = Home;