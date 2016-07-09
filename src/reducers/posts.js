const posts = (state = [], action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return [{
        id: "p1",
        title: "post1",
        text: "Test post1 content",
        href: "https://www.github.com/FlyersWeb"
      },{
        id: "p2",
        title: "post2",
        text: "Test post2 content",
        href: "https://www.github.com/FlyersWeb"
      }];
    default:
      return state;
  }
}

export default posts