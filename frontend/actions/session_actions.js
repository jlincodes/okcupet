import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(resp => dispatch(receiveCurrentUser(resp)))
);

export const login = (user) => (dispatch) => (
  SessionApiUtil.login(user).then(resp =>
    dispatch(receiveCurrentUser(resp)))
);

export const logout = () => (dispatch) => (
  SessionApiUtil.logout().then(resp => dispatch(receiveCurrentUser(null)))
);
