class Question < ApplicationRecord
  has_many :responses,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :Response
end
