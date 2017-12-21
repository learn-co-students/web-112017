class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  has_many :gifts
  has_many :items, through: :gifts
end
