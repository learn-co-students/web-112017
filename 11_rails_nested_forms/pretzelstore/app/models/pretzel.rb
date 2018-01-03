class Pretzel < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :price, numericality: { greater_than: 0 }
end
