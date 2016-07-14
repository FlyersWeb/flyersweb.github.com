require('es6-promise').polyfill();
const fetchJsonp = require('fetch-jsonp');

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVED_PROJECTS = 'RECEIVED_PROJECTS'


function requestPROJECTS() {
  return {
    type: REQUEST_PROJECTS
  }
}

function receivedPROJECTS(json) {
  return {
    type: RECEIVED_PROJECTS,
    projects: json.data.map(e => {
      return {
        id: e.id.toString(),
        title: e.name,
        content: `<h4>${e.description}</h4>`,
        anchor: {
          href: e.url
        }
      }
    }),
    receivedAt: Date.now()
  }
}

function fetchPROJECTS() {
  return dispatch => {
    dispatch(requestPROJECTS())
    return fetchJsonp("https://api.github.com/users/flyersweb/repos")
      .then(response => response.json())
      .then(json => dispatch(receivedPROJECTS(json)))
  }
}

function shouldFetchPROJECTS(state) {
  const projects = state.projects;
  if(!projects.items.length) {
    return true
  } else if (projects.isFetching) {
    return false
  } else {
    return projects.didInvalidate
  }
}

export function fetchIfNeededPROJECTS() {
  return (dispatch, getState) => {
    if (shouldFetchPROJECTS(getState())) {
      return dispatch(fetchPROJECTS())
    }
  }
}