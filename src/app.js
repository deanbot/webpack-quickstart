// include vendor styles
require('bootstrap/dist/css/bootstrap.min.css');

// include global app styles 
import styles from './css/app.scss';

var React = require('react');
var ReactDOM = require('react-dom');

// include react components
var Forum = require('./components/Forum.react.js');

ReactDOM.render(
	React.createElement(Forum, null),
	document.getElementById('forum')
);