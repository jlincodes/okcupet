import {
  RECEIVE_ALL_PET_RESPONSES,
  RECEIVE_PET_RESPONSE
} from '../actions/pet_resp_actions';
import merge from 'lodash/merge';

const defaultState = {};

const PetResponseReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PET_RESPONSES:
      return action.pet_responses;
    case RECEIVE_PET_RESPONSE:
      return merge({}, state, {[action.pet_response.id]: action.pet_response});
    default:
      return state;
  }
};

export default PetResponseReducer;
