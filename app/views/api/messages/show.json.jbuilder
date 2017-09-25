json.messages do
  @conversation.messages.each do |message|
    json.set! message.id do
      json.author_id message.author_id
      json.body message.body
      json.created_at message.created_at
    end
  end
end
