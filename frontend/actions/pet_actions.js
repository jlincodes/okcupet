import * as PetApiUtil from '../util/pet_api_util';

export const RECEIVE_ALL_PETS = "RECEIVE_ALL_PETS";
export const RECEIVE_PET = "RECEIVE_PET";
export const REMOVE_PET = "REMOVE_PET";
export const SEARCH_PETS = "SEARCH_PETS";

const receiveAllPets = (pets) => ({
  type: RECEIVE_ALL_PETS,
  pets
});

const receivePet = (pet) => ({
  type: RECEIVE_PET,
  pet
});

const removePet = (pet) => ({
  type: REMOVE_PET,
  pet
});

const receivePets = (query) => ({
  type: SEARCH_PETS,
  query
});

export const fetchAllPets = () => dispatch => (
  PetApiUtil.fetchAllPets()
    .then(resp => dispatch(receiveAllPets(resp)))
);

export const searchPets = (query) => dispatch => (
  PetApiUtil.searchPets(query)
    .then(resp => dispatch(receivePets(resp)))
);

export const fetchPet = (id) => dispatch => (
  PetApiUtil.fetchPet(id)
  .then(resp => dispatch(receivePet(resp)))
);

export const createPet = (pet) => dispatch => (
  PetApiUtil.createPet(pet)
  .then(resp => dispatch(receivePet(resp)))
);

export const updatePet = (pet) => dispatch => (
  PetApiUtil.updatePet(pet)
  .then(resp => dispatch(receivePet(resp)))
);

export const deletePet = (id) => dispatch => (
  PetApiUtil.deletePet(id)
  .then(resp => dispatch(removePet(resp)))
);
