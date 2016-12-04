import React from 'react'
import Helmet from 'react-helmet'

import { Link } from 'react-router'

const NoMatch = React.createClass({
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{"lang": "fr"}}
          title="Error 404 - FullStack Web Developer"
          meta={[
            {"name": "description", "content": "This page does not exists, please go back home and get access to my web development works."},
          ]}
        />
        <div className="container">
          <h1>Not Found</h1>
          <Link to="/">Go back home</Link>
        </div>
      </div>
    )
  }
});

module.exports = NoMatch;