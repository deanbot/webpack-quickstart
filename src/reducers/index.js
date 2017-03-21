import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ajaxStatus from './ajaxStatusReducer';
import group from './groupReducer';
import groupType from './groupTypeReducer';

const rootReducer = combineReducers({
  ajaxStatus,
  group,
  groupType,
  routing: routerReducer
});

export default rootReducer;
