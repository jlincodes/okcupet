import {
  RECEIVE_ALL_USER_RESPONSES,
  RECEIVE_USER_RESPONSE
} from '../actions/user_resp_actions';
import merge from 'lodash/merge';

const defaultState = {};

const UserResponseReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USER_RESPONSES:
      return action.user_responses;
    case RECEIVE_USER_RESPONSE:
      return merge({}, state, {[action.user_response.id]: action.user_response});
    default:
      return state;
  }
};

export default UserResponseReducer;
