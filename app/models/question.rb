class Question < ApplicationRecord
  has_many :user_responses,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :UserResponse

  has_many :pet_responses,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :PetResponse

end
