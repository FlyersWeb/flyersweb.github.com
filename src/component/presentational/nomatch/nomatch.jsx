import React from 'react'
import Helmet from 'react-helmet'

import { Link } from 'react-router'

const NoMatch = React.createClass({
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{"lang": "fr"}}
          title="Error 404 Not Found"
          meta={[
            {"name": "description", "content": "This page does not exists"},
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