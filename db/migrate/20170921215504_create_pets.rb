class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.string :name, null: false
      t.string :animal_type, null: false
      t.integer :age, null: false
      t.string :img_url, null: false
      t.string :location, null: false
      t.integer :user_id, null: false
      t.string :summary

      t.timestamps
    end
  end
end
