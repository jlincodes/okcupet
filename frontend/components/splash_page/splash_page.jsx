import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import SignUpFormContainer from '../session_form/sign_up_form_container';
import LoginFormContainer from '../session_form/login_form_container';

const customStyles = {
  content : {
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    border: '1px solid #3260c7'
  }
};

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      },
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.clearErrors = this.props.clearErrors.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
    this.clearErrors();
  }

  closeModal() {
    this.clearErrors();
    this.setState({modalIsOpen: false});
  }

  // demo guest login
  handleGuest(e) {
    e.preventDefault();
    this.clearErrors();
    this.props.login({ username: 'guest', password: 'password' });
  }

  render() {
    return (
      <div>
        <div>
          <div className="splash-nav-bar">
            <Link to="/" className="home-link">
              <p className="logo">okcupet!</p>
            </Link>
            <p className="auth">
              Already a member?&nbsp;
              <button className="session-button" onClick={ this.openModal }>
                Log In</button>&nbsp;
              <button className="session-button" onClick={ this.handleGuest }>
                Demo</button>
            </p>

            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Login Modal"
            >
              <LoginFormContainer />
            </Modal>
        </div>

          <div>
            <SignUpFormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
