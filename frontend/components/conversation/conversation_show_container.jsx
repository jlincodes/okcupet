import { connect } from 'react-redux';
import ConversationShow from './conversation_show';

import { fetchConversation } from '../../actions/conversation_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchMessages, createMessage } from '../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    conversation: state.entities.conversation[ownProps.match.params.conversationId],
    currentUser: state.session.currentUser,
    users: state.entities.user,
    messages: Object.values(state.entities.messages)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchConversation: (id) => dispatch(fetchConversation(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchMessages: (conversationId) => dispatch(fetchMessages(conversationId)),
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationShow);
