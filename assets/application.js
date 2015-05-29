var React = require("react");
var $ = require("jquery");

var mountNode = window.document.getElementById("container");
var Feed = require("./components/feed.jsx");

var ACCESS_TOKEN = "1097af4266ebe866bf1363190a38a1cb1a5d389e3493edd12aef6737f8b5946e" // NEVER DO THIS FROM PUBLIC JS

$.ajaxSetup({
  headers: {"Authorization": "bearer " + ACCESS_TOKEN}
});

$.get("/api/messages", function(data) {
  React.render(<Feed messages={data.messages} />, mountNode);
});
