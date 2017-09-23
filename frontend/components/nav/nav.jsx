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
    // .then(() => this.props.router.push("/signup"));
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <div className="nav-bar">
            <p className="logo">okcupet!</p>
            <p>
              <button className="session-button" onClick={this.handleLogOut}>Log Out</button>
            </p>
          </div>
          <h2>Welcome, {this.props.currentUser.username}!</h2>
        </div>
      );
    }
  }
}

export default withRouter(Nav);
