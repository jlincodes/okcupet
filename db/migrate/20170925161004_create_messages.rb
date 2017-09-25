class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :author_id
      t.integer :conversation_id
      t.text :body

      t.timestamps
    end
  end
end
