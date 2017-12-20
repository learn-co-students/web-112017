class Gift < ApplicationRecord
  validates :product_name, presence: true
  validates :description, presence: true 
end
