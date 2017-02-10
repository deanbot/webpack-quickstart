const React = require('react');
const AppHeader = require('./AppHeader.react');
const AppBody = require('./AppBody.react');

const App = React.createClass({
	getInitialState: function() {
		return {
			body: {
				exclamation: 'Oh my goodness!',
				message: 'A webpack build from the junimos!',
				helpText: 'You\'re seeing the <code>./src/index.html</code> template which includes an html id used to render the react app in <code>./src/app.js</code>. The components in <code>./src/components</code> are used in the react app.'
			}
		}
	},

	render: function() {
		return (
			<div>
				<AppHeader></AppHeader>
				<div className="container">
					<AppBody content={this.state.body}></AppBody>
				</div>
			</div>
		);
	}
});
module.exports = App;