import { combineReducers } from 'redux';
import mainstate from './mainstate';
import authPopup from './authPopup';
import user from './user';

const rootReducer = combineReducers({
  mainstate,
  authPopup,
  user
});

export default rootReducer;
