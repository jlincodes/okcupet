class AddSubjectToConversations < ActiveRecord::Migration[5.1]
  def change
    add_column :conversations, :subject, :text
  end
end
