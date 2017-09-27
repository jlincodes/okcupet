import { connect } from 'react-redux';
import QuestionIndex from './question_index';

import { fetchAllQuestions } from '../../actions/question_actions';
// import { fetchAllResponses } from '../../actions/response_actions';

const mapStateToProps = (state) => {
  // console.log(state);
  return ({
    questions: Object.values(state.entities.questions)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllQuestions: () => dispatch(fetchAllQuestions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
