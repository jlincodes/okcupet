import { RECEIVE_ALL_PETS,
         RECEIVE_PET,
         REMOVE_PET,
         SEARCH_PETS } from '../actions/pet_actions';
import merge from 'lodash/merge';

const defaultState = {};

const PetReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PETS:
      return action.pets;
    case RECEIVE_PET:
      return merge({}, state, {[action.pet.id]: action.pet});
    case REMOVE_PET:
      let newState = merge({}, state);
      delete newState[action.pet.id];
      return newState;
    case SEARCH_PETS:
      return action.pets;
    default:
      return state;
  }
};

export default PetReducer;
