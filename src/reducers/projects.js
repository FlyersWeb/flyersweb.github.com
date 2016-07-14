import { REQUEST_PROJECTS , RECEIVED_PROJECTS, fetchIfNeededPROJECTS } from '../actions/projects'

const projects = (state = {
    fetcher: fetchIfNeededPROJECTS,
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) => {
  switch(action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVED_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.projects
      })
    default:
      return state;
  }
}

export default projects