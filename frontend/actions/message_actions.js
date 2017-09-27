import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const createMessage = (message) => dispatch => (
  MessageApiUtil.createMessage(message)
  .then(resp => dispatch(receiveMessage(resp)))
);
