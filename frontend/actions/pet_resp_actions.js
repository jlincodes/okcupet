import * as PetRespApiUtil from '../util/pet_resp_api_util';

export const RECEIVE_ALL_PET_RESPONSES = "RECEIVE_ALL_PET_RESPONSES";
export const RECEIVE_PET_RESPONSE = "RECEIVE_PET_RESPONSE";

const receiveAllPetResponses = (responses) => ({
  type: RECEIVE_ALL_PET_RESPONSES,
  responses
});

const receivePetResponse = (response) => ({
  type: RECEIVE_PET_RESPONSE,
  response
});

export const fetchAllPetResponses = () => dispatch => (
  PetRespApiUtil.fetchAllPetResponses()
    .then(resp => dispatch(receiveAllPetResponses(resp)))
);

export const fetchPetResponse = (id) => dispatch => (
  PetRespApiUtil.fetchPetResponse(id)
    .then(resp => dispatch(receivePetResponse(resp)))
);
