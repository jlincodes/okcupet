class Message < ApplicationRecord
  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :conversation,
  primary_key: :id,
  foreign_key: :conversation_id,
  class_name: :Conversation

end
