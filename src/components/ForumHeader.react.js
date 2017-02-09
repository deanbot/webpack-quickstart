var React = require('react');
require('./forum.scss');

var ForumHeader = React.createClass({
	render: function() {

		console.log(this.props.allAnswers);

		return (
				<nav className="forum-header-navbar navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">
				        React Forum
				      </a>
				    </div>
				  </div>
				</nav>
			);
	}
});
module.exports = ForumHeader;