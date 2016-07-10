export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVED_PROJECTS = 'RECEIVED_PROJECTS'


function requestPROJECTS() {
  return {
    type: REQUEST_PROJECTS
  }
}

function receivedPROJECTS() {
  return {
    type: RECEIVED_PROJECTS,
    projects : [{
      id: 1,
      title : "angular-symfony",
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
      title : "angular-symfony",
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
      title : "angular-symfony",
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

export function fetchPROJECTS() {
  return dispatch => {
    dispatch(requestPROJECTS())
    return dispatch(receivedPROJECTS())
  }
}