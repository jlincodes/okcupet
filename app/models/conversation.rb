class Conversation < ApplicationRecord

  has_many :messages,
  primary_key: :id,
  foreign_key: :conversation_id,
  class_name: :Message

  belongs_to :convo_starter,
  primary_key: :id,
  foreign_key: :sender_id,
  class_name: :User

  belongs_to :convo_receiver,
  primary_key: :id,
  foreign_key: :recipient_id,
  class_name: :User

end
