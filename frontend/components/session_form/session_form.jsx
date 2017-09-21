import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SignUpFormContainer from "./sign_up_form_container";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">log In</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error,idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.setModal(true);
  }

  handleGuest(e) {
    e.preventDefault();
    this.state.login({ username: 'drogon', password: 'password123' });
  }

  render () {
    return (
      <div>
        <div>
          Already a member?
          <button className="login-button" onClick={ this.handleClick }>
            Log In</button>
          <button className="demo-button" onClick={ this.handleGuest }>
            Demo</button>
        </div>
        <SignUpFormContainer />
      </div>
    );
  }
}

export default withRouter(SessionForm);
