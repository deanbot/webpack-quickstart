import * as types from '../constants/actionTypes';
import initialState from './initialState';
import { getGUID } from '../utils/guidHelper';

export default function groupReducer(state = initialState.group, action) {
  switch (action.type) {
    case types.GROUP_LOAD_SUCCESS:
      return action.group;

    case types.GROUP_ADD_TO:
      action.member.id = getGUID();
      return [...state, Object.assign({}, action.member)];

    case types.GROUP_REMOVE_FROM:
      return [...state.filter(member => member.id !== action.memberId)];

    default:
      return state;
  }
}
