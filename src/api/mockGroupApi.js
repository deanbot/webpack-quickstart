/*eslint-disable no-unused-vars*/
import delay from './delay';
import * as groupTypes from '../constants/groupTypes';

let groupMembers = [
  {
    id: 1,
    type: groupTypes.GROUP_TYPE_JUNIMO
  },
  {
    id: 2,
    type: groupTypes.GROUP_TYPE_JUNIMO
  },
  {
    id: 3,
    type: groupTypes.GROUP_TYPE_BIRB
  }
];

class GroupApi {
  static loadGroup() {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          // todo get from and populate initial local storage
          resolve(Object.assign([], groupMembers));
        },
        delay
      );
    });
  }

  static saveGroup(members) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          // todo save to local storage
          groupMembers = members;
          resolve(Object.assign([], groupMembers));
        },
        delay
      );
    });
  }
}

export default GroupApi;
