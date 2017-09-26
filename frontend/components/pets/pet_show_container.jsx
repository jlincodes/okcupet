import { connect } from 'react-redux';
import PetShow from './pet_show';

import { fetchPet } from '../../actions/pet_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return ({
    pet: state.pets[ownProps.match.params.petId],
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPet: (id) => dispatch(fetchPet(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetShow);
