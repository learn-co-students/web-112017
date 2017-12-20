class CreateGifts < ActiveRecord::Migration[5.1]
  def change
    create_table :gifts do |t|
      t.string :product_name
      t.string :descripton

      t.timestamps
    end
  end
end
