import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';

import { fetchAllConversations } from '../../actions/conversation_actions';

const mapStateToProps = (state) => {
  console.log(state.conversations);
  return ({
    conversations: state.conversations
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllConversations: () => dispatch(fetchAllConversations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationIndex);
