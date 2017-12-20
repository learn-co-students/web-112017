class ChangeDescriptionOnGifts < ActiveRecord::Migration[5.1]
  def change
    remove_column :gifts, :descripton
    add_column :gifts, :description, :string 
  end
end
