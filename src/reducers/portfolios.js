import { REQUEST_PORTFOLIOS , RECEIVED_PORTFOLIOS, fetchPORTFOLIOS } from '../actions/portfolios'

const portfolios = (state = {
    fetcher: fetchPORTFOLIOS,
    isFetching: false,
    items: []
  }, action) => {
  switch(action.type) {
    case REQUEST_PORTFOLIOS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_PORTFOLIOS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.portfolios
      })
    default:
      return state;
  }
}

export default portfolios