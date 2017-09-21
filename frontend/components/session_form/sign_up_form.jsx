import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/users');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
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

  render () {
    return (
      <div className="homepage">

        <div className="homepage-desc">
          <h1 className="top-text-heading">DON'T SHOP, <br />ADOPT</h1>
          <p className="top-text-p">
            Look for pets ready for foster and adoption.<br />
            Adopt today and give a shelter animal a<br />
            second chance at a furr-ever home.
          </p>
        </div>

        <div className="signup-form-div" >
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <h3>Sign Up:</h3>
            <br />
            <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')} />
            <br />
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')} />

            <br />
            <button className="sign-up-button" type="submit">Sign Up</button>
            {this.renderErrors()}
          </form>
        </div>

      </div>
    );
  }
}

export default withRouter(SignUpForm);
