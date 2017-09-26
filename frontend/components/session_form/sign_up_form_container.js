import { connect } from 'react-redux';

import { signup, clearErrors } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
