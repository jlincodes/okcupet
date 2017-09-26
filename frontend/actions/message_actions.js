import { createMessage } from '../actions/message_actions';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const createConversation = (message) => dispatch => (
  createMessage(message)
  .then(resp => dispatch(receiveMessage(resp)))
);
