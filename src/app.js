// include vendor styles
require('bootstrap/dist/css/bootstrap.min.css');

// include global app styles 
import styles from './css/global.scss';

var React = require('react');
var ReactDOM = require('react-dom');

// include react components
var App = require('./components/App.react.js');

ReactDOM.render(
	React.createElement(App, null),
	document.getElementById('app')
);