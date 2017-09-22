import { connect } from 'react-redux';
import PetIndex from './pet_index';

import { fetchAllPets } from '../../actions/pet_actions';

const mapStateToProps = (state) => ({
  pets: Object.values
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPets: () => dispatch(fetchAllPets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetIndex);
