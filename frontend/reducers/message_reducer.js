import { RECEIVE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const defaultState = {};

const MessageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
    console.log("reducer", action);
      return merge({}, state, {[action.message.id]: action.message});
    default:
      return state;
  }
};

export default MessageReducer;
