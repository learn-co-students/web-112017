class Gift < ApplicationRecord
  belongs_to :user
  belongs_to :item

  def user_name
  end


  def user_name=(val)
  end
end
