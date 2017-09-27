class PetResponse < ApplicationRecord
  validates :body
  
  belongs_to :question,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :Question

  belongs_to :pet,
  primary_key: :id,
  foreign_key: :pet_id,
  class_name: :Pet
end
