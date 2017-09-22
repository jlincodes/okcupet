import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      // errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // componentDidMount() {
  //   this.setState({ errors: this.props.errors });
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/users');
    }
    // this.setState({ errors: [] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
      // .fail( resp => this.setState( {errors: resp.responseJSON} ));
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
    // console.log("render signup form");
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
          <div className="signup-form-wrapper">
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
              <div className="auth-errors">{this.renderErrors()}</div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(SignUpForm);
