class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :pets,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Pet

  has_many :sent_conversations,
  primary_key: :id,
  foreign_key: :sender_id,
  class_name: :Conversation

  has_many :received_conversations,
  primary_key: :id,
  foreign_key: :recipient_id,
  class_name: :Conversation

  has_many :authored_messages,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Message

  has_many :responses,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Response

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
