import * as PetRespApiUtil from '../util/pet_resp_api_util';

export const RECEIVE_PET_RESPONSES = "RECEIVE_PET_RESPONSES";
export const RECEIVE_PET_RESPONSE = "RECEIVE_PET_RESPONSE";

const receivePetResponses = (petResponses) => ({
  type: RECEIVE_PET_RESPONSES,
  petResponses
});

const receivePetResponse = (petResponse) => ({
  type: RECEIVE_PET_RESPONSE,
  petResponse
});

export const fetchPetResponses = (petId) => dispatch => (
  PetRespApiUtil.fetchPetResponses(petId)
    .then(resp => dispatch(receivePetResponses(resp)))
);

export const fetchPetResponse = (id) => dispatch => (
  PetRespApiUtil.fetchPetResponse(id)
    .then(resp => dispatch(receivePetResponse(resp)))
);
