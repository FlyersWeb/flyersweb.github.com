import { combineReducers } from 'redux'
import portfolios from './portfolios'
import projects from './projects'
import posts from './posts'
import homies from './home'

const reduxApp = combineReducers({
  portfolios,
  projects,
  posts,
  homies
})

export default reduxApp