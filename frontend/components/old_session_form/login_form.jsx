import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error,idx) => (
  //         <li key={`error-${idx}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // {this.renderErrors()}
  
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>

          <br />

        <label>Username:
            <input type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.update('username')} />
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')} />
          </label>

          <br />
          <input type="submit" value="Log In" />

        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
