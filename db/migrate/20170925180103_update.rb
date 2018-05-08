class Update < ActiveRecord::Migration[5.1]
  def change
    rename_column :conversations, :user_one_id, :sender_id
    rename_column :conversations, :user_two_id, :recipient_id
  end
end
