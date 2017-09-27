class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.text :user_question, null: false
      t.text :pet_question, null: false
      t.timestamps
    end
  end
end
