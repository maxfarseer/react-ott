import {
  SHOW_POPUP, HIDE_POPUP,
  LOGIN, LOGOUT,
  LOADING_BEGIN, LOADING_DONE
} from '../constants/Types';

const initialState = {
  user: {
    login: '',
    pass: ''
  },
  authPopup: {
    isShown: false
  },
  loading: false
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

  case LOADING_BEGIN:
    return {
      ...state,
      loading: true
    }

  case LOADING_DONE:
    return {
      ...state,
      loading: false
    }

  default:
    return state;
  }
}
