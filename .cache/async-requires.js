// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/home/nassim/Projects/flyersweb.github.com/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-project-jsx": () => import("/home/nassim/Projects/flyersweb.github.com/src/templates/project.jsx" /* webpackChunkName: "component---src-templates-project-jsx" */),
  "component---src-pages-404-jsx": () => import("/home/nassim/Projects/flyersweb.github.com/src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-about-jsx": () => import("/home/nassim/Projects/flyersweb.github.com/src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-index-jsx": () => import("/home/nassim/Projects/flyersweb.github.com/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import("/home/nassim/Projects/flyersweb.github.com/.cache/data.json")

