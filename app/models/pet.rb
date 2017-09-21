class Pet < ApplicationRecord
  validates :name, :type, :age, :img_url, :location, presence: true

  belongs_to :organization,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

end
