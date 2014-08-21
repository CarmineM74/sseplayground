class Post < ActiveRecord::Base

  validates :message, presence: true
  validates :user, presence: true

  belongs_to :user

end
