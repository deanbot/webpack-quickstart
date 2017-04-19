import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

require('./appHeader.scss');

export const AppHeader = ({ currentPath }) => {
  return (
    <nav className="app-header-navbar navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            Webpack Quickstart App
          </a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={currentPath == '/' ? 'active' : ''}>
              <IndexLink to="/">Home</IndexLink>
            </li>
            <li className={currentPath == '/group' ? 'active' : ''}>
              <Link to="/group">Group</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

AppHeader.propTypes = {
  currentPath: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    currentPath: state.routing.locationBeforeTransitions.pathname
  };
}

export default connect(mapStateToProps)(AppHeader);
