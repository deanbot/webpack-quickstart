import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ajaxCallsInProgress from './ajaxCallsInProgressReducer';
import group from './groupReducer';
import groupType from './groupTypeReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  group,
  groupType,
  routing: routerReducer
});

export default rootReducer;
