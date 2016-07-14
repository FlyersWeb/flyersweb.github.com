export const FETCH_HOME = 'FETCH_HOME'

export function fetchHOMIES() {
  return {
    type: FETCH_HOME,
    homies: [{
      id : "0",
      title : "Coding",
      content : `I love coding and software design. Using new web programming techs to fulfill features necessity 
        I like to explore new tools and ideas. Using NodeJS, PHP5, C# or Python for back-end developments based on 
        new database schemes as of Redis, MongoDB, Big Table or simply SQL like. I like to focus on back-end development 
        but I also do front-end using AngularJS, ReactJS or simply native Javascript.`
      ,
      anchor : {
        href : "/project"
      },
    }, {
      id : "1",
      title : "Security",
      content : `I love to discover new fields and techniques. That´s why I really appreciated team based Capture the Flag 
      competition wargames. These experiences really improved my skills in computer security.`
      ,
      anchor : {
        href : "/blog"
      },
    }, {
      id : "2",
      title : "Quality",
      content : `It is hard for developers to make bulletproof software, that's why I'm really interested by automated 
      quality insurance tools and release chain management. Thanks to new stuff around as of devops and scrum management, 
      quality software is possible with some work.`
      ,
      anchor : {
        href : "/portfolio"
      },
    }]
  }
}