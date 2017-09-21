import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const action = (formType === 'login') ? login : signup;
  return {
    action: user => dispatch(action(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
