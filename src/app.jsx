import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Home, NoMatch } from './component'

console.log(Home)

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));