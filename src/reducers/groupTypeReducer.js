import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function groupTypeReducer(state = initialState.groupType, action) {
  switch (action.type) {
    case types.GROUP_CHANGE_TYPE:
      return action.value;
    default:
      return state;
  }
}
