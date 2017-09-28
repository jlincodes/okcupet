import {
  RECEIVE_PET_RESPONSES,
  RECEIVE_PET_RESPONSE } from '../actions/pet_resp_actions';
import merge from 'lodash/merge';

const defaultState = {};

const PetResponseReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PET_RESPONSES:
      return action.petResponses;
    case RECEIVE_PET_RESPONSE:
      return merge({}, state, {[action.petResponse.id]: action.petResponse});
      // const newState = Object.assign({}, state);
      // newState[action.petResponses.id] = action.petResponses;
      // return newState;
    default:
      return state;
  }
};

export default PetResponseReducer;
