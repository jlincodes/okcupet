class ChangeColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :conversations, :sender_id, :integer, null: false
    change_column :conversations, :recipient_id, :integer, null: false
  end
end
