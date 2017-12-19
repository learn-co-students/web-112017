class CreatePretzels < ActiveRecord::Migration[5.1]
  def change
    create_table :pretzels do |t|
      t.string :name
      t.string :flavor
      t.float :price

      t.timestamps
    end
  end
end
