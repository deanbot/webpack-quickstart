// include vendor styles
require('bootstrap/dist/css/bootstrap.min.css');

// include global app styles 
import styles from './css/global.scss';

const React = require('react');
const ReactDOM = require('react-dom');

// include react components
const App = require('./components/App.react');

ReactDOM.render(
	React.createElement(App, null),
	document.getElementById('app')
);