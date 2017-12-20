class CreateGifts < ActiveRecord::Migration[5.1]
  def change
    create_table :gifts do |t|
      t.string :name
      t.integer :rating
      t.string :description
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
