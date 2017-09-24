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
    const currentUser = this.props.currentUser;
    // console.log("nav this.props", this.props);
    if (currentUser) {
      return(

        <div>
          <div className="nav-bar">
            <div className="nav-right">
              <p className="logo">okcupet!</p>
            </div>
            <div className="nav-left">
              <p className="header-user-img">
                <Link to={`/users/${currentUser.id}`}>
                  <img
                    src={currentUser.img_url}
                    alt={currentUser.username} />
                </Link>
              </p>
              <p>
                <button className="session-button" onClick={this.handleLogOut}>Log Out</button>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Nav);
