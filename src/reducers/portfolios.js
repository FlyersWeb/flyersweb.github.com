import { REQUEST_PORTFOLIOS , RECEIVED_PORTFOLIOS, fetchIfNeededPORTFOLIOS } from '../actions/portfolios'

const portfolios = (state = {
    fetcher: fetchIfNeededPORTFOLIOS,
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) => {
  switch(action.type) {
    case REQUEST_PORTFOLIOS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVED_PORTFOLIOS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.portfolios
      })
    default:
      return state;
  }
}

export default portfolios