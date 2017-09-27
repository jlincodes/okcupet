class Response < ApplicationRecord
  belongs_to :question,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :Question

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :pet,
  primary_key: :id,
  foreign_key: :pet_id,
  class_name: :Pet
end
