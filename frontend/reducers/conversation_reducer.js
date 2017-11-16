import {
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_CONVERSATION } from '../actions/conversation_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ConversationReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return action.conversations;
    case RECEIVE_CONVERSATION:
      return merge({}, state, {[action.conversation.id]: action.conversation});
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default ConversationReducer;
