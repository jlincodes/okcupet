export const fetchAllPets = () => (
  $.ajax({
    method: 'GET',
    url: `api/pets`
  })
);

export const fetchPet = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/pets/${id}`
  })
);

export const createPet = (pet) => (
  $.ajax({
    method: 'POST',
    url: `api/pets/`,
    data: { pet }
  })
);

export const updatePet = (pet) => (
  $.ajax({
    method: 'PATCH',
    url: `api/pets/${pet.id}`,
    data: { pet }
  })
);

export const deletePet = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/pets/${id}`
  })
);

export const searchPets = (query) => (
  $.ajax({
    method: 'GET',
    url: `api/pets`,
    data: { query }
  })
);
