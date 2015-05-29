var $ = require("jquery");
var React = require("react");
var Message = require("./message.jsx");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      messages: this.props.messages
    }
  },

  componentDidMount: function() {
    var self = this;
    this.interval = setInterval(function() {
      $.get("/api/messages", function(data) {
        self.setState({messages: data.messages});
      });
    }, 2000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div className="feed">
        {this.state.messages.map(this.renderMessage)}
      </div>
    )
  },

  renderMessage: function(message) {
    return <Message key={message.id} message={message} />;
  }
})
