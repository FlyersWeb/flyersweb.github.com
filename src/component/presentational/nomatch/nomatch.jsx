import React from 'react'
import Helmet from 'react-helmet'

const NoMatch = React.createClass({
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{"lang": "fr"}}
          title="Error 404 Not Found"
          meta={[
            {"name": "description", "content": "This pages do not exists"},
          ]}
        />
        <div className="container">
          <h1>Not Found</h1>
          <a href="/">Go back home</a>
        </div>
      </div>
    )
  }
});

module.exports = NoMatch;