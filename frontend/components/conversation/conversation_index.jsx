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

  // console.log("convo", conversations);
  // let sendersIds = conversations.map( conversation => (
  //   conversation.sender_id
  // ));
  // console.log(sendersIds);

  //
  // {
  //   conversations.map( (conversation, idx) => {
  //     return (
  //     <li>
  //       {conversation.subject}
  //       {users[conversation.sender_id] ?
  //       <span>{users[conversation.sender_id].username}</span> :
  //       <span></span>}
  //     </li>
  //     );
  //   })
  // }

  render() {

    const conversations = this.props.conversations;
    const users = this.props.users;


    if (conversations && users) {
      console.log("users", users);
      if (users[3]) {

        console.log(users[3].username);
      }
      return (
        <div>
          <NavContainer />
          <h1>Messages</h1>
            <ul className="convo-list">
              {conversations.map((conversation, idx) => (
                <ConversationIndexItem key={idx} conversation={conversation} users={users} />
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

export default ConversationIndex;

// {
//   conversations.map((conversation, idx) => (
//   <ConversationIndexItem
//     key={idx}
//     conversation={ conversation } />
//   ))
// }
