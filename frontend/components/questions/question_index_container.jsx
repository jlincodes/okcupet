import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { withRouter } from 'react-router-dom';

import { fetchAllQuestions } from '../../actions/question_actions';
import { fetchPetResponses } from '../../actions/pet_resp_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    questions: Object.values(state.entities.questions),
    pet: state.entities.pets[ownProps.match.params.petId],
    user: state.entities.user[ownProps.match.params.userId],
    petResponses: Object.values(state.entities.petResponses)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllQuestions: () => dispatch(fetchAllQuestions()),
  fetchPetResponses: (petId) => dispatch(fetchPetResponses(petId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex));
