import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ConversationIndex from './conversation_index';

const ConversationIndexItem = (props) => {
  // console.log(props);
  const conversation = props.conversation;
  const users = props.users;
  // console.log(conversation);
  // console.log(users);
  return (
    <li className='convo-li'>
      {
        users[conversation.sender_id] ?
          <div className="msg-user-img">
            <Link to={`/users/${users[conversation.sender_id].id}`}>
              <img src={users[conversation.sender_id].img_url}
                alt={users[conversation.sender_id].username} />
            </Link>
          </div> : <span></span>
      }
      {
        users[conversation.sender_id] ?
        <div>
          <Link to={`/users/${users[conversation.sender_id].id}`}>
            {users[conversation.sender_id].username}
          </Link>
        </div> : <span></span>
      }
      <div>
        <Link to={`/users/${users[conversation.sender_id].id}`}>
          {conversation.subject}
        </Link>
        {conversation.subject}
      </div>
    </li>
  );
};

export default ConversationIndexItem;
