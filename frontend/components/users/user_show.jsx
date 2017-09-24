import React from 'react';
import { Link } from 'react-router-dom';

import UserShowContainer from './user_show_container';
import NavContainer from '../nav/nav_container';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    console.log(this.props.user);
    const user = this.props.user;

    if (user) {
      return (
        <div>
          <div><NavContainer /></div>
          <h1>A User here</h1>
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
