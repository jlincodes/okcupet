import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { withRouter } from 'react-router-dom';

import { fetchAllQuestions } from '../../actions/question_actions';
// import { fetchAllResponses } from '../../actions/response_actions';

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  console.log("ownProps", ownProps);
  return ({
    questions: Object.values(state.entities.questions),
    pet: state.entities.pets[ownProps.match.params.petId],
    user: state.entities.user[ownProps.match.params.userId]
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllQuestions: () => dispatch(fetchAllQuestions()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex));
