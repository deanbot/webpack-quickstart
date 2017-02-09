var React = require('react');
require('./appHeader.scss');

var AppHeader = React.createClass({
	render: function() {

		console.log(this.props.allAnswers);

		return (
				<nav className="app-header-navbar navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">
				        ReactJS + Webpack + Bootstrap Quickstart App
				      </a>
				    </div>
				  </div>
				</nav>
			);
	}
});
module.exports = AppHeader;