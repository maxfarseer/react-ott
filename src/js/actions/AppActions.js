import * as types from '../constants/Types';
import 'isomorphic-fetch';

export function loadingBegin() {
  return {
    type: types.LOADING_BEGIN
  };
}

export function loadingDone() {
  return {
    type: types.LOADING_DONE
  };
}

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
    /*fetch('https://api.github.com/users/maxfarseer')
      .then(res =>
        res.json().then(json => ())
      )*/

    fetch('https://api.github.com/users/maxfarseer')
      .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });


    dispatch(loadingBegin());
    dispatch(hidePopup());
    //fake delay for login
    return setTimeout(() => {
      //login success
      dispatch(login(user));
      dispatch(loadingDone());
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
    dispatch(loadingBegin());
    //fake delay for logout
    return setTimeout(() => {
      //logout success
      dispatch(logout());
      window.location.hash="main";
      dispatch(loadingDone());
    },1000)
  };
}
