import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchAllUsers = () => dispatch => (
  UserApiUtil.fetchAllUsers()
  .then(resp => dispatch(receiveAllUsers(resp)))
);

export const fetchUser = (id) => dispatch => (
  UserApiUtil.fetchUser(id)
  .then(resp => dispatch(receiveUser(resp)))
);

export const updateUser = (user) => dispatch => (
  UserApiUtil.updateUser(user)
  .then(resp => dispatch(receiveUser(resp)))
);
