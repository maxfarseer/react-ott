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

export function hangleLogin(user) {
  return function (dispatch) {
    console.log('LOGIN REQUEST');
    //fake delay for login
    return setTimeout(() => {
      //login success
      dispatch(login(user));
      dispatch(hidePopup());
      window.location.hash='administrator/main';
    },1000)
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export function hangleLogout() {
  return function (dispatch) {
    console.log('LOGOUT REQUEST');
    //fake delay for logout
    return setTimeout(() => {
      //logout success
      dispatch(logout());
      window.location.hash="main";
    },1000)
  };
}
