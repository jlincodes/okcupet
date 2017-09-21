import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

import LoginForm from './login_form';

const customStyles = {
  content : {
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)'
  }
};

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  // this part causes error:
  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Log In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login Modal"
          >

          <LoginForm />

        </Modal>
      </div>
    );
  }
}

export default withRouter(LoginModal);
