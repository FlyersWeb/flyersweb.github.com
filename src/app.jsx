import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import Helmet from 'react-helmet'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-12307097-3')

import { Home, Project, Blog, Portfolio, NoMatch, Navbar } from './component/presentational'

import reduxApp from './reducers'

require("./assets/css/main.css")

const App = React.createClass({
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{"lang": "fr"}}
          title="Flyers Web Developer Website"
          meta={[
            {"name": "description", "content": "A web developer website showing his works and thoughts on Javascript, Web, W3C and more..."},
            {"name": "viewport", "content": "width=device-width, user-scalable=no"}
          ]}
        />
        <Navbar />
        {this.props.children}
      </div>
    )
  }
});

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const loggerMiddleware = createLogger();
let store = createStore(
  reduxApp,
  undefined,
  applyMiddleware(
    thunkMiddleware
  )
)
render((
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={logPageView}>
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
