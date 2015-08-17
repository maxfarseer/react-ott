import * as types from '../constants/Types';

export function showPopup() {
  return {
    type: types.SHOW_POPUP
  };
}

export function hidePopup() {
  return {
    type: types.HIDE_POPUP
  };
}

export function login(user) {
  return {
    type: types.LOGIN,
    user
  };
}

export function logout() {
  return {
    type: types.LOGOUT
  };
}
