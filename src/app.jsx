import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Helmet from 'react-helmet'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Home, Project, Blog, Portfolio, NoMatch, Navbar } from './component/presentational'

import reduxApp from './reducers'

const App = React.createClass({
  render() {
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
        {this.props.children}
      </div>
    )
  }
});

let store = createStore(reduxApp)
render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="project" component={Project}/>
        <Route path="blog" component={Blog}/>
        <Route path="portfolio" component={Portfolio}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>
), document.getElementById('root'));