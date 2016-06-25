import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Home, NoMatch } from './component'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="project" component={Home}/>
      <Route path="blog" component={Home}/>
      <Route path="portfolio" component={Home}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));