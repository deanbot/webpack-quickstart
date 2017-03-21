/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import GroupPage from './containers/GroupPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="group" component={GroupPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
