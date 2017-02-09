const React = require('react');
const src = require('../images/junimo.gif');
require('./AppJunimo.scss');

const AppJunimo = React.createClass({
	render: function() {
		return (
			<div className="junimo">
				<img src={src} />
			</div>
		);
	}
});
module.exports = AppJunimo;