require('es6-promise').polyfill();
const fetchJsonp = require('fetch-jsonp');
const queryString = require('query-string');
const config = require('../../../config');

export const REQUEST_PORTFOLIOS = 'REQUEST_PORTFOLIOS'
export const RECEIVED_PORTFOLIOS = 'RECEIVED_PORTFOLIOS'


function requestPORTFOLIOS() {
  return {
    type: REQUEST_PORTFOLIOS
  }
}

function receivedPORTFOLIOS(json) {
  return {
    type: RECEIVED_PORTFOLIOS,
    portfolios: json.photos.photo.map(e => {
      return {
        id: e.id.toString(),
        title: e.title,
        content: `<h4>${e.description._content}</h4>
        <p><a href="${e.url_o}"><img src="${e.url_n}" width="${e.width_n}" height="${e.height_n}"/></a></p>`,
        anchor: {
          href: e.url_o
        }
      }
    }),
    receivedAt: Date.now()
  }
}


function fetchPORTFOLIOS() {
  return dispatch => {
    dispatch(requestPORTFOLIOS())
    var method = config.flickr.method;
    var apiKey = config.flickr.apiKey;
    var userId = config.flickr.userId;

    const params = { method: method, api_key: apiKey, user_id: userId, safe_search: 3, extras: 'description,tags,url_n,url_o', format: 'json'};
    const query = queryString.stringify(params);
    return fetchJsonp(`https://api.flickr.com/services/rest/?${query}`, {
        jsonpCallback: 'jsoncallback',
        timeout: 3000
      })
      .then(response => response.json())
      .then(json => dispatch(receivedPORTFOLIOS(json)))
  }
}


function shouldFetchPORTFOLIOS(state) {
  const portfolios = state.portfolios;
  if(!portfolios.items.length) {
    return true
  } else if (portfolios.isFetching) {
    return false
  } else {
    return portfolios.didInvalidate
  }
}

export function fetchIfNeededPORTFOLIOS() {
  return (dispatch, getState) => {
    if (shouldFetchPORTFOLIOS(getState())) {
      return dispatch(fetchPORTFOLIOS())
    }
  }
}