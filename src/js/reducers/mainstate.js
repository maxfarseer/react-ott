import { SHOW_POPUP, HIDE_POPUP } from '../constants/Types';

const initialState = {
  user: {
    login: 'maxfarseer',
    pass: 'qwe'
  },
  authPopup: {
    isShown: false
  }
};

export default function mainstate(state = initialState, action) {
  switch (action.type) {
  case SHOW_POPUP:
    return {
      ...state,
      authPopup: {
        isShown: true
      }
    }

  case HIDE_POPUP:
    return {
      ...state,
      authPopup: {
        isShown: false
      }
    }

  default:
    return state;
  }
}
