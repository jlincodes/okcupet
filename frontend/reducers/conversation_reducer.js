import {
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_CONVERSATION } from '../actions/conversation_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ConversationReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return action.conversations;
    case RECEIVE_CONVERSATION:
      return merge({}, state, {[action.conversation.id]: action.conversation});
    case RECEIVE_MESSAGE:
      const conversation = state[action.message.conversation_id];
      conversation.messages.push(action.message);
      return merge({}, state, {[conversation.id]: conversation});
    default:
      return state;
  }
};

export default ConversationReducer;
