require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');
const queryString = require('query-string');
const config = require('../../../config');

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVED_POSTS = 'RECEIVED_POSTS'

function requestPOSTS() {
  return {
    type: REQUEST_POSTS
  }
}

function receivedPOSTS(json) {
  return {
    type: RECEIVED_POSTS,
    posts: json.items.map(e => {
      return {
        id: e.id.toString(),
        title: e.title,
        content : (e.content.length <= 200) ? e.content : e.content.substring(0,200)+"...",
        anchor : {
          href : e.url
        }
      }
    })
  }
}

function fetchPOSTS(state) {
  return dispatch => {
    dispatch(requestPOSTS())
    const apiKey = config.blogger.apiKey

    const params = { key: apiKey, maxResults: 15, pageToken: state.pageToken };
    const query = queryString.stringify(params);

    return fetch(`https://www.googleapis.com/blogger/v3/blogs/6604313324859652520/posts?${query}`)
      .then(response => response.json())
      .then(json => dispatch(receivedPOSTS(json)))
  }
}

function shouldFetchPOSTS(state) {
  const posts = state.posts;
  if(!posts.items.length) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchIfNeededPOSTS() {
  return (dispatch, getState) => {
    if (shouldFetchPOSTS(getState())) {
      return dispatch(fetchPOSTS(getState()))
    }
  }
}