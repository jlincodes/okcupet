class Pet < ApplicationRecord
  validates :name, :animal_type, :age, :img_url, :location, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  def self.find_by_animal_type(query)
    Pet.where('animal_type LIKE ?', query)
  end

  def self.find_by_location(query)
    Pet.where('location LIKE ?', query)
  end
end
