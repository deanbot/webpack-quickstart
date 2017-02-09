var React = require('react');
var AppHeader = require('./AppHeader.react.js');
var Junimo = require('./AppJunimo.react.js');

var App = React.createClass({

	getInitialState: function() {
		return {
			allAnswers: {
				'1': {
					body: 'Isn\'t that about time travel?',
					correct: false
				},
				'2': {
					body: 'React and flux are a tool and methodologies for building the front end of web applications.',
					correct: false
				},
				'3': {
					body: 'React is a synonym for \'respond\'',
					correct: false
				}
			}
		}
	},

	render: function() {
		return (
			<div>
				<AppHeader allAnswers={ this.state.allAnswers }></AppHeader>
				<Junimo></Junimo>
			</div>
		);
	}
});
module.exports = App;