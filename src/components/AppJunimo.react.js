var React = require('react');
var src = require('../images/junimo.gif');
require('./AppJunimo.scss');

var Junimo = React.createClass({
	render: function() {
		return (
			<div className="junimo">
				<img src={src} />
			</div>
		);
	}
});
module.exports = Junimo;