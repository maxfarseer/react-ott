import {SHOW_POPUP, HIDE_POPUP, LOGIN, LOGOUT} from '../constants/Types';

const initialState = {
  user: {
    login: '',
    pass: ''
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

  case LOGIN:
    return {
        ...state,
        user: {
          login: action.user,
          pass: 'fakepass'
        }
      }

  case LOGOUT:
    return {
        ...state,
        user: {
          login: '',
          pass: ''
        }
      }

  default:
    return state;
  }
}
