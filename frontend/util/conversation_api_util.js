export const fetchAllConversations = () => (
  $.ajax({
    method: 'GET',
    url: `/api/conversations`
  })
);
export const fetchConversation = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/conversations/${id}`
  })
);
export const createConversation = (conversation) => (
  $.ajax({
    method: 'POST',
    url: `/api/conversations/${conversation.id}`,
    data: { conversation }
  })
);

export const createMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: `/api/conversations/${message.conversation_id}/messages`
  })
);
