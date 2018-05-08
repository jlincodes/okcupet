class UserResponse < ApplicationRecord
  validates :body, presence: true

  belongs_to :question,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :Question

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
