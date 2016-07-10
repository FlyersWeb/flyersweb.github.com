import { FETCH_HOME, fetchHOMIES } from '../actions/home'

const projects = (state = {
    fetcher: fetchHOMIES,
    isFetching: false,
    items: []
  }, action) => {
  switch(action.type) {
    case FETCH_HOME:
      return Object.assign({}, state, {
        items: action.homies
      })
    default:
      return state;
  }
}

export default projects