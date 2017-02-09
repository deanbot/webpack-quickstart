const React = require('react');
const AppJunimo = require('./AppJunimo.react');
require('./AppBody.scss');

const AppBody = React.createClass({
	render: function() {
		let content = this.props.content;
		let exclamation = content.exclamation;
		let message = content.message;
		let helpText = content.helpText;

		return (
			<div className="app-body">
				<AppJunimo></AppJunimo>
				<div className="container">
					<div className="content well">
						<h2>{ exclamation } <small>{ message }</small></h2>
						<p dangerouslySetInnerHTML={{__html: helpText}}></p>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = AppBody;