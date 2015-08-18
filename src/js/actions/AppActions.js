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
    type: types.LOGOUT,
  };
}

export function hangleLogout() {

  return function (dispatch) {
    //dispatch(requestLogout(username));
    //TODO: dispatch logout request
    console.log('LOGOUT REQUEST');

    //fake delay for logout
    return setTimeout(() => {
      //logout success
      dispatch(logout());
      window.location.hash="/#/main";
    },1000)

  };
}
