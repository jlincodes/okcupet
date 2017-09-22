class Pet < ApplicationRecord
  validates :name, :animal_type, :age, :img_url, :location, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

end
