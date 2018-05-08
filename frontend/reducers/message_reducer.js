import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const defaultState = {};

const MessageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      const newState = Object.assign({}, state);
      newState[action.message.id] = action.message;
      return newState;
    default:
      return state;
  }
};

export default MessageReducer;
