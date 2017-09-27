import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';

import { fetchAllConversations } from '../../actions/conversation_actions';
import { fetchAllUsers } from '../../actions/user_actions';


const mapStateToProps = (state) => {

  return ({
    conversations: Object.values(state.conversation).reverse(),
    currentUser: state.session.currentUser,
    users: state.user
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationIndex);
