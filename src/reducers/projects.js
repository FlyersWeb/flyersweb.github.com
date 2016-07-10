import { REQUEST_PROJECTS , RECEIVED_PROJECTS, fetchPROJECTS } from '../actions/projects'

const projects = (state = {
    fetcher: fetchPROJECTS,
    isFetching: false,
    items: []
  }, action) => {
  switch(action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.projects
      })
    default:
      return state;
  }
}

export default projects