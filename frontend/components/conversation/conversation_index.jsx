import React from 'react';
import ConversationIndexContainer from './conversation_index_container';

import ConversationIndexItem from './conversation_index_item';
import NavContainer from '../nav/nav_container';

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: this.props.conversations };
  }

  componentDidMount() {
    this.props.fetchAllConversations();
  }

  render() {
    if (!this.props) {
      return (
        <div></div>
      );
    }
    return (
      <div>
        <NavContainer />
        <h1>messages</h1>
      </div>
    );
  }
}

export default ConversationIndex;
