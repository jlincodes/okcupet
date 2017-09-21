import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
// export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
//
// const clearErrors = () => {
//   return {
//     type: CLEAR_ERRORS,
//   };
// };

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
  .then(resp => dispatch(receiveCurrentUser(resp)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = (user) => (dispatch) => (
  SessionApiUtil.login(user)
  .then(resp =>  dispatch(receiveCurrentUser(resp)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => (dispatch) => (
  SessionApiUtil.logout()
  .then(resp => dispatch(receiveCurrentUser(null)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);
