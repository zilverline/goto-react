var React = require("react");

var mountNode = window.document.getElementById("container");
var Introduction = require("./components/introduction.jsx");

React.render(<Introduction name="ReactJS is awesome" />, mountNode);
