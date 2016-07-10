export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVED_POSTS = 'RECEIVED_POSTS'


function requestPOSTS() {
  return {
    type: REQUEST_POSTS
  }
}

function receivedPOSTS() {
  return {
    type: RECEIVED_POSTS,
    posts : [{
      id: 1,
      title : "post #1",
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
      title : "post #2",
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
      title : "post #3",
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
      title : "post #4",
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

export function fetchPOSTS() {
  return dispatch => {
    dispatch(requestPOSTS())
    return dispatch(receivedPOSTS())
  }
}