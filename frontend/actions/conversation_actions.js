import * as ConversationApiUtil from '../util/conversation_api_util';

export const RECEIVE_ALL_CONVERSATIONS = "RECEIVE_ALL_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

const receiveAllConversations = (conversations) => ({
  type: RECEIVE_ALL_CONVERSATIONS,
  conversations
});

const receiveConversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
});

export const fetchAllConversations = () => dispatch => (
  ConversationApiUtil.fetchAllConversations()
    .then(resp => dispatch(receiveAllConversations(resp)))
);

export const fetchConversation = () => dispatch => (
  ConversationApiUtil.fetchConversation()
  .then(resp => dispatch(receiveConversation(resp)))
);

export const createConversation = () => dispatch => (
  ConversationApiUtil.createConversation()
  .then(resp => dispatch(receiveConversation()))
);

export const createMessage = () => dispatch => (
  ConversationApiUtil.createMessage()
  .then(resp => dispatch(receiveConversation(resp)))
);
