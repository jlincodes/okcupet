export const fetchAllMessages = () => (
  $.ajax({
    method: 'GET',
    url: `/api/conversations`
  })
);
export const fetchMessage = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/conversations/${id}`
  })
);
export const createMessage = (message) => (
  $.ajax({
    method: 'GET',
    url: `/api/messages/${message.id}`,
    data: { message }
  })
);
