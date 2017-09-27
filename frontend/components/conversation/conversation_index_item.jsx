import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ConversationIndex from './conversation_index';

const ConversationIndexItem = (props) => {
  const conversation = props.conversation;
  const users = props.users;
  const sender = conversation.sender_id;

  return (
    <tr>
      {
        users[sender] ?
          <td>
            <div className="msg-img-wrapper">
              <Link to={`/users/${users[sender].id}`}>
                <img src={users[sender].img_url}
                  alt={users[sender].username} />
              </Link>
            </div>
          </td> : <span></span>
      }
      {
        users[sender] ?
        <td>
          <Link to={`/users/${users[sender].id}`}>
            {users[sender].username}
          </Link>
        </td> : <td></td>
      }
      <td>
        <Link to={`/messages/${conversation.id}`}>
          {conversation.subject}
        </Link>
      </td>
    </tr>
  );
};

export default ConversationIndexItem;
