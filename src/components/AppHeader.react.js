const React = require("react");
require("./appHeader.scss");

const AppHeader = React.createClass({
  render: function() {
    return (
      <nav className="app-header-navbar navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Webpack Quickstart App
            </a>
          </div>
        </div>
      </nav>
    );
  }
});
module.exports = AppHeader;
