import * as types from '../constants/actionTypes';
import groupApi from '../api/mockGroupApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function addToGroup(member) {
  return { type: types.GROUP_ADD_TO, member };
}

export function removeFromGroup(memberId) {
  return { type: types.GROUP_REMOVE_FROM, memberId };
}

export function changeGroupType(value) {
  return {
    type: types.GROUP_CHANGE_TYPE,
    value
  };
}

export function loadGroupSuccess(group) {
  return { type: types.GROUP_LOAD_SUCCESS, group };
}

export function saveGroupSuccess(group) {
  return { type: types.GROUP_SAVE_SUCCESS, group };
}

export function saveGroup(members) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return groupApi
      .saveGroupMembers(members)
      .then(members => {
        dispatch(saveGroupSuccess(members));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw error;
      });
  };
}

export function loadGroup() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return groupApi
      .getGroupMembers()
      .then(members => {
        dispatch(loadGroupSuccess(members));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw error;
      });
  };
}
