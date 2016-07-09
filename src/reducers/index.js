import { combineReducers } from 'redux'
import projects from './projects'
import posts from './posts'

const reduxApp = combineReducers({
  projects,
  posts
})

export default reduxApp