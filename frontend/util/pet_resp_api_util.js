export const fetchAllPetResponses = () => (
  $.ajax({
    method: 'GET',
    url: `/api/pet_responses`
  })
);

export const fetchPetResponse = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pet_responses/${id}`
  })
);

// For later use, when creating updating responses become features
// export const createPetResponse = (resp) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/pet_responses/`,
//     data: { resp }
//   })
// );
// 
// export const updatePetResponse = (resp) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/pet_responses/${resp.id}`,
//     data: { resp }
//   })
// );
