// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/home/nassim/Projects/flyersweb.github.com/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-project-jsx": preferDefault(require("/home/nassim/Projects/flyersweb.github.com/src/templates/project.jsx")),
  "component---src-pages-404-jsx": preferDefault(require("/home/nassim/Projects/flyersweb.github.com/src/pages/404.jsx")),
  "component---src-pages-about-jsx": preferDefault(require("/home/nassim/Projects/flyersweb.github.com/src/pages/about.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/home/nassim/Projects/flyersweb.github.com/src/pages/index.jsx"))
}

