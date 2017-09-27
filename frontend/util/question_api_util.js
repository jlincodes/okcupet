export const fetchAllQuestions = () => (
  $.ajax({
    method: 'GET',
    url: `/api/questions`
  })
);

export const fetchQuestion = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/questions/${id}`
  })
);
