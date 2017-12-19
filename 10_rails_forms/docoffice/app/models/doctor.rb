class Doctor < ApplicationRecord
  validates :name, :speciality, presence: true
  validates :registration_number, uniqueness: true
  has_many :patients
end
