import { connect } from 'react-redux';
import ConversationShow from './conversation_show';

import { fetchConversation } from '../../actions/conversation_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { createMessage } from '../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    conversation: state.conversation[ownProps.match.params.conversationId],
    currentUser: state.session.currentUser,
    users: state.user
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchConversation: (id) => dispatch(fetchConversation(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationShow);
