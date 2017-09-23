import { connect } from 'react-redux';
import PetShow from './pet_show';

import { fetchPet } from '../../actions/pet_actions';

const mapStateToProps = (state, ownProps) => ({
  pet: state.pets[ownProps.match.params.petId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPet: (id) => dispatch(fetchPet(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetShow);
