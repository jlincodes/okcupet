import React from 'react';
import { Link } from 'react-router';

import ConversationShowContainer from './conversation_show_container';
import ConversationShowItem from './conversation_show_item';
import NavContainer from '../nav/nav_container';

class ConversationShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleMessageCreate = this.handleMessageCreate.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers()
      .then(this.props.fetchConversation(
        this.props.match.params.conversationId));
  }

  handleMessageCreate(e) {
    e.preventDefault();
    this.setState({message: e.currentTarget.value});
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
          <br />
          <form
            className="msg-form"
            onSubmit={this.handleMessageCreate}>
            <textarea rows="6" column="20"/>
            <button type="submit">Send</button>
          </form>
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
