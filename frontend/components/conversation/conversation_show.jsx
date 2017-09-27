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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers()
      .then(this.props.fetchMessages(
        this.props.match.params.conversationId));
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({message: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentUserId = this.props.currentUser.id;
    let currentConvoId = this.props.messages[0].conversation_id;
    let body = this.state.message;

    let message = {
      author_id: currentUserId,
      conversation_id: currentConvoId,
      body: body
    };
    this.props.createMessage(message);
  }

  render() {
    const users = this.props.users;
    const messages = this.props.messages;
    // debugger
    if (messages && users) {
      const conversation = messages.length !== 0 ? this.props.messages[0].conversation.subject : null;

      return (
        <div>
          <NavContainer />
          <div className="msg-show">
            <h1>Message</h1>
            <h3>{conversation}</h3>
            <ul className="msg-list">
              {messages.map( (message, idx) => (
                <ConversationShowItem
                  key={idx}
                  message={message}
                  users={users} />
              ))}
            </ul>
            <br />
            <form className="msg-form" onSubmit={this.handleSubmit}>
              <textarea
                rows="6"
                cols="40"
                onChange={this.handleChange}
                value={this.state.msgInput}
                placeholder="Write your message here!"
                />
              <br />
              <button type="submit" className="msg-send-button">Send</button>
            </form>
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

export default ConversationShow;
