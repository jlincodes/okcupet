import {
  RECEIVE_USER_RESPONSES,
  RECEIVE_USER_RESPONSE } from '../actions/user_resp_actions';
import merge from 'lodash/merge';

const defaultState = {};

const UserResponseReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_RESPONSES:
      return action.userResponses;
    case RECEIVE_USER_RESPONSE:
      return merge({}, state, {[action.userResponse.id]: action.userResponse});
      // const newState = Object.assign({}, state);
      // newState[action.userResponses.id] = action.userResponses;
      // return newState;
    default:
      return state;
  }
};

export default UserResponseReducer;
