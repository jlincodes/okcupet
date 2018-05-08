class CreateUserResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :user_responses do |t|
      t.text :body, null: false
      t.integer :question_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
