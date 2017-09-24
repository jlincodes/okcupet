import { RECEIVE_ALL_PETS,
         RECEIVE_PET,
         REMOVE_PET } from '../actions/pet_actions';
import merge from 'lodash/merge';

const defaultState = {};

const PetReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PETS:
      return action.pets;
    case RECEIVE_PET:
      return merge({}, oldState, {[action.pet.id]: action.pet});
    case REMOVE_PET:
      let newState = merge({}, oldState);
      delete newState[action.pet.id];
      return newState;
    default:
      return oldState;
  }
};

export default PetReducer;
