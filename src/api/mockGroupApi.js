/*eslint-disable no-unused-vars*/
import delay from './delay';
import * as groupTypes from '../constants/groupTypes';
const storageKey = 'rjs-group-members';

class GroupApi {
  static loadGroup() {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          const group = JSON.parse(localStorage.getItem(storageKey)) || [];
          resolve(group);
        },
        delay
      );
    });
  }

  static saveGroup(members) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          localStorage.setItem(storageKey, JSON.stringify(members));
          resolve(Object.assign([], members));
        },
        delay
      );
    });
  }
}

export default GroupApi;
