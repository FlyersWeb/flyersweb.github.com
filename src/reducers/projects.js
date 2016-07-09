const projects = (state = [], action) => {
  switch(action.type) {
    case 'GET_PROJECTS':
      return [{
        id: "p1",
        title: "Project1",
        text: "Test project1 content",
        href: "https://www.github.com/FlyersWeb"
      },{
        id: "p2",
        title: "Project2",
        text: "Test project2 content",
        href: "https://www.github.com/FlyersWeb"
      }];
    default:
      return state;
  }
}

export default projects