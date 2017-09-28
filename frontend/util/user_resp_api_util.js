export const fetchUserResponses = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `api/user_responses`,
    data: { user_response: { user_id } }
  })
);

export const fetchUserResponse = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/user_responses/${id}`
  })
);

// For later use, when creating updating responses become features
// export const createUserResponse = (resp) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/user_responses/`,
//     data: { resp }
//   })
// );
//
// export const updateUserResponse = (resp) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/user_responses/${resp.id}`,
//     data: { resp }
//   })
// );
