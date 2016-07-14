import { REQUEST_POSTS , RECEIVED_POSTS, fetchIfNeededPOSTS } from '../actions/posts'

const posts = (state = {
    fetcher: fetchIfNeededPOSTS,
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) => {
  switch(action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVED_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts
      })
    default:
      return state;
  }
}

export default posts