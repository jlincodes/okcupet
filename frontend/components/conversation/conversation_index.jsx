import React from 'react';
import ConversationIndexContainer from './conversation_index_container';

import ConversationIndexItem from './conversation_index_item';
import NavContainer from '../nav/nav_container';

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers().then(this.props.fetchAllConversations());
  }


  render() {

    const conversations = this.props.conversations;
    const users = this.props.users;

    if (conversations && users) {
      return (
        <div>
          <NavContainer />
          <div className="msg-index">
            <h1>Messages</h1>
            <table>
              <thead>
                <td></td>
                <td>Sender<br />Username</td>
                <td>Subject</td>
              </thead>
              <tbody>
                {conversations.map((conversation, idx) => (
                  <ConversationIndexItem
                    key={idx}
                    conversation={conversation}
                    users={users} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default ConversationIndex;
