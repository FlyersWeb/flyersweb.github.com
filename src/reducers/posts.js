import { REQUEST_POSTS , RECEIVED_POSTS, fetchPOSTS } from '../actions/posts'

const posts = (state = {
    fetcher: fetchPOSTS,
    isFetching: false,
    items: []
  }, action) => {
  switch(action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts
      })
    default:
      return state;
  }
}

export default posts