import React from 'react';
import { IndexLink, Link } from 'react-router';

require('./appHeader.scss');

const AppHeader = () => {
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
            <li className="active">
              <IndexLink to="/">Home</IndexLink>
            </li>
            <li>
              <Link to="/group">Group</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default AppHeader;
