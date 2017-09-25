class Pet < ApplicationRecord
  validates :name, :animal_type, :age, :img_url, :location, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  # def self.find_by_animal_type(animal_type)
  #   Pet.where('animal_type LIKE ?', animal_type)
  # end

  def self.find_by_location(location)
    Pet.where('location LIKE ?', location)
  end

  # def self.find_by_search(animal_type, location)
  #   if animal_type == "any"
  #     Pet.find_by_location(location)
  #   elsif location == "any"
  #     Pet.find_by_animal_type(animal_type)
  #   else
  #     Pet.where('animal_type LIKE ?', animal_type).where('location LIKE ?', location)
  #   end
  # end
end
