import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './action';

const initialUserState = { name: 'John Doe', email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.logoutSuccess]: () => false,
  [authActions.loginSuccess]: () => true,
});

/*
const user = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
    case actionTypes.REFRESH_CURRENT_USER_SUCCESS:
      return payload.user;

    case actionTypes.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
      return payload.token;

    case actionTypes.SIGN_UP_ERROR:
    case actionTypes.SIGN_IN_ERROR:
    case actionTypes.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};
*/
export default combineReducers({
  user,
  token,
  isAuthenticated,
  error,
});