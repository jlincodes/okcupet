import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ConversationIndex from './conversation_index';

const ConversationIndexItem = (props) => {
  const conversation = props.conversation;
  const users = props.users;
  const sender = conversation.sender_id;

  return (
    <li className='convo-li'>
      {
        users[sender] ?
          <div className="msg-user-img">
            <Link to={`/users/${users[sender].id}`}>
              <img src={users[sender].img_url}
                alt={users[sender].username} />
            </Link>
          </div> : <span></span>
      }
      {
        users[sender] ?
        <div>
          <Link to={`/users/${users[sender].id}`}>
            {users[sender].username}
          </Link>
        </div> : <span></span>
      }
      <div>
        <Link to={`/messages/${conversation.id}`}>
          {conversation.subject}
        </Link>
      </div>
    </li>
  );
};

export default ConversationIndexItem;

// {conversation.subject}
