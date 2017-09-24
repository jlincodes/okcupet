import React from 'react';
import { Link } from 'react-router-dom';

import UserShowContainer from './user_show_container';
import NavContainer from '../nav/nav_container';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user;

    if (user) {
      return (
        <div>
          <div><NavContainer /></div>

          <div className="profile">
            <div className="profile-header">
              <div className="profile-header-items">
                <div className="profile-img">
                  <img src={user.img_url}
                    alt={user.username} />
                </div>
                <div>
                  <h3>{user.username}</h3>
                  <p>{user.location}</p>
                </div>
              </div>
            </div>
            <div className="profile-body-wrapper">
              <div className="profile-body">
                <div className="about-me">
                  <h2>Summary:</h2>
                  <p>{user.summary}</p>
                </div>
                <div className="details">
                  <h2>Additional details:</h2>
                  <p>Add additional user details here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default UserShow;
