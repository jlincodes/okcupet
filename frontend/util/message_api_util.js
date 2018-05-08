export const fetchMessages = (conversation_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/messages`,
    data: { message: { conversation_id } }
  })
);

export const createMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: `/api/messages`,
    data: { message }
  })
);
