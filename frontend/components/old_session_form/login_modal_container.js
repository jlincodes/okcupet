import React from 'react';
import { connect } from 'react-redux';

import LoginModal from './login_modal';
import { login } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
