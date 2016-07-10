export const REQUEST_PORTFOLIOS = 'REQUEST_PORTFOLIOS'
export const RECEIVED_PORTFOLIOS = 'RECEIVED_PORTFOLIOS'


function requestPORTFOLIOS() {
  return {
    type: REQUEST_PORTFOLIOS
  }
}

function receivedPORTFOLIOS() {
  return {
    type: RECEIVED_PORTFOLIOS,
    portfolios : [{
      id: 1,
      title : "sample #1",
      content : `<a href="https://github.com/FlyersWeb/angular-symfony" class="ng-binding">https://github.com/FlyersWeb/angular-symfony</a>
      <p class="ng-binding">
        Project Bootstrap for an angularJS + Symfony project
      </p>`
      ,
      anchor : {
        href : "https://github.com/FlyersWeb/angular-symfony.git"
      },
    }, {
      id: 2,
      title : "sample #2",
      content : `<a href="https://github.com/FlyersWeb/angular-symfony" class="ng-binding">https://github.com/FlyersWeb/angular-symfony</a>
      <p class="ng-binding">
        Project Bootstrap for an angularJS + Symfony project
      </p>`
      ,
      anchor : {
        href : "https://github.com/FlyersWeb/angular-symfony.git"
      },
    }, {
      id: 3,
      title : "sample #3",
      content : `<a href="https://github.com/FlyersWeb/angular-symfony" class="ng-binding">https://github.com/FlyersWeb/angular-symfony</a>
      <p class="ng-binding">
        Project Bootstrap for an angularJS + Symfony project
      </p>`
      ,
      anchor : {
        href : "https://github.com/FlyersWeb/angular-symfony.git"
      },
    }, {
      id: 4,
      title : "angular-symfony",
      content : `<a href="https://github.com/FlyersWeb/angular-symfony" class="ng-binding">https://github.com/FlyersWeb/angular-symfony</a>
      <p class="ng-binding">
        Project Bootstrap for an angularJS + Symfony project
      </p>`
      ,
      anchor : {
        href : "https://github.com/FlyersWeb/angular-symfony.git"
      },
    }]
  }
}

export function fetchPORTFOLIOS() {
  return dispatch => {
    dispatch(requestPORTFOLIOS())
    return dispatch(receivedPORTFOLIOS())
  }
}