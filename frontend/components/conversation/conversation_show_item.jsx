import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ConversationShow from './conversation_show';

const ConversationShowItem = (props) => {
  const message = props.message;
  const users = props.users;
  const authorId = props.message.author_id;
  console.log("author id:", authorId);

  return (
    <li className="msg-li">
      {
        users[authorId] ?
        <div className="msg-user-img">
          <Link to={`/users/${users[authorId].id}`}>
            <img src={users[authorId].img_url}
              alt={users[authorId].username} />
          </Link>
        </div> : <span></span>
      }
      <div className="msg-body-wrapper">{message.body}</div>
    </li>
  );
};

export default ConversationShowItem;
