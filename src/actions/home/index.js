export const FETCH_HOME = 'FETCH_HOME'

export function fetchHOMIES() {
  return {
    type: FETCH_HOME,
    homies: [{
      id : "0",
      title : "Coding",
      content : `Using new web programming techs to fulfill features necessity
        I like to explore new tools and ideas. Using NodeJS, PHP, C# or Python for back-end developments based on
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
      title : "UX",
      content : `While I do appreciate trying new technologies, I think it should always serve the user, that's why I also
      focus my developments towards improving user experience using the best usage and integration technics. By using the available
      tools provided by HTML5 and CSS3, it is now possible to create really immersive web experiences without performance impacts.`
      ,
      anchor : {
        href : "/portfolio"
      },
    }]
  }
}