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
      title : "Career",
      content : `Because I do not only make PoC but also apply my knowledges on real production environment, I encourage you to
      have a look at my past experiences so you'll have an idea of what are my skills and expertises. I've been working mainly
      on cutting edge web technologies on high demand websites as you will see in my career timeline.`
      ,
      anchor : {
        href : "/timefolio"
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