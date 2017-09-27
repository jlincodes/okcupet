class CreatePetResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :pet_responses do |t|
      t.text :body, null: false
      t.integer :question_id, null: false
      t.integer :pet_id, null: false
      t.timestamps
    end
  end
end
