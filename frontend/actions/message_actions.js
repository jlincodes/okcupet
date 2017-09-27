import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchMessages = (conversationId) => dispatch => (
  MessageApiUtil.fetchMessages(conversationId)
  .then(resp => dispatch(receiveMessages(resp)))
);

export const createMessage = (message) => dispatch => (
  MessageApiUtil.createMessage(message)
  .then(resp => dispatch(receiveMessage(resp)))
);
