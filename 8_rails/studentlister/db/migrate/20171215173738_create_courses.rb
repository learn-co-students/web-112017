class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.integer :average_rating

      t.timestamps
    end
  end
end
