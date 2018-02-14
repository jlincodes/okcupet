import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PetIndexContainer from '../pets/pet_index_container';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      let userImgUrl = this.props.currentUser.img_url;

      return(

        <div>
          <div className="nav-bar">
            <div className="nav-right">
              <Link to="/" className="home-link">
                <p className="logo">okcupet!</p>
              </Link>
            </div>
            <div className="nav-left">
              <div className="header-user-img">
                <Link to={`/users/${currentUser.id}`}>
                  <img
                    src={userImgUrl}
                    alt={currentUser.username} />
                </Link>
              </div>
              <div>
                <Link to="/messages" className="messages-link">
                  <p>Messages</p>
                </Link>
              </div>
              <div>
                <button className="light-blue-btn" onClick={this.handleLogOut}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Nav);
