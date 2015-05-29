var React = require("react")

module.exports = React.createClass({
  render: function() {
    return (
      <div className="introduction">
        <h1>{this.props.name}</h1>
        <p>By Daniel van Hoesel and Lars Vonk.</p>
      </div>
    )
  }
});
