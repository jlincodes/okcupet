import React from 'react';
import ConversationShowContainer from './conversation_show_container';

import ConversationShowItem from './conversation_show_item';
import NavContainer from '../nav/nav_container';

class ConversationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers()
      .then(this.props.fetchConversation(
        this.props.match.params.conversationId));
  }


  render() {

    const conversation = this.props.conversation;
    const users = this.props.users;


    if (conversation && users) {
      const messages = this.props.conversation.messages;

      return (
        <div>
          <NavContainer />
          <h1>Message</h1>
          <h3>{conversation.subject}</h3>
          <ul className="msg-list">
            {messages.map( (message, idx) => (
              <ConversationShowItem
                key={idx}
                message={message}
                users={users} />
            ))}
          </ul>
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

export default ConversationShow;
