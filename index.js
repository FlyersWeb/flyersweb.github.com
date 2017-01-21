var path = require("path");
var url = require("url");
var express = require('express');
var app = express();

var blog = "https://flyers-web.blogspot.fr/"

app.use("/assets", express.static('bin'));

app.get("/:year([0-9]{4})/:month([0-9]{2})/:slug([\\s\\S]+)$", function(req, res) {
  var destPath = path.join(req.params.year, req.params.month, req.params.slug);
  var destination = url.parse(blog + destPath);
  res.redirect(301, url.format(destination))
});

app.get("/*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
