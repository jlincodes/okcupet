import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {
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
          <h2>Welcome, {this.props.currentUser.username}!</h2>
          <button onClick={this.handleLogOut}>Log Out</button>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);

// GARBAGE
// const sessionLinks = () => (
//   <nav>
//     <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
//   </nav>
// );
//
//
// const greetingMsg = (currentUser, logout) => {
//
//   handleLogOut(e) {
//     e.preventDefault();
//     this.props.logout().then( () => this.props.router.push("/"))
//   }
//   return (
//     <div>
//       <h2>Welcome, {currentUser.username}!</h2>
//       <button onClick={handleLogOut}>Log Out</button>
//     </div>
//   )
// }
//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? greetingMsg(currentUser, logout) : sessionLinks()
// );
