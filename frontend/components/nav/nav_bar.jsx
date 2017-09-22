import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// import GreetingContainer from '../greeting/greeting_container';
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

class NavBar extends React.Component {
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
    // this.clearErrors = this.props.clearErrors.bind(this);
    // console.log(this.props);
  }

  // componentWillUnmount() {
  //   this.clearErrors();
  //   console.log("unmount");
  // }
  // modal

  openModal() {
    // console.log("open", this.props);
    // clearErrors does not work :(
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    // console.log(this.clearErrors);
    this.setState({modalIsOpen: false});
  }

  // demo guest login
  handleGuest(e) {
    e.preventDefault();
    this.props.login({ username: 'drogon', password: 'password' });
  }

  render() {
    return (
      <div>
        <div>
          <div className="nav-bar">
            <p className="logo">OKCuPet!</p>
            <p className="auth">
              Already a member?&nbsp;
              <button className="login-button" onClick={ this.openModal }>
                Log In</button>&nbsp;
              <button className="demo-button" onClick={ this.handleGuest }>
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

export default NavBar;
