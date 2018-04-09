require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password salt/hashing' do

    it 'does not save user passwords to the database' do
      User.create!({
        username: 'rspectest',
        password: 'rspec123'
      })
      user = User.find_by_username('rspectest')
      expect(user.password).not_to be('rspec123')
    end
  end
end
