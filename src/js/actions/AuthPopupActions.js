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

export function clearMarked(qq) {
  return {
    type: types.CLEAR_MARKED,
    qq
  };
}
