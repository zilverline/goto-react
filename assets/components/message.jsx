var React = require("react");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      open: false
    }
  },

  render: function() {
    return (
      <div className="message" onClick={this.handleClick}>
        <img src={this.props.message.user.avatar_url_large} />
        <h1>{this.props.message.user.full_name}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.message.content_formatted }} />
        {this.renderMetaData()}
      </div>
    )
  },

  renderMetaData: function() {
    if (this.state.open) {
      var dateString = new Date(this.props.message.posted_at).toString()
      return <div className="timestamp">{dateString}</div>
    }
  },

  handleClick: function(e) {
    e.preventDefault();

    this.setState({open: !this.state.open});
  }
})
