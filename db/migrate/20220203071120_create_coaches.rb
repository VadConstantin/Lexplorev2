class CreateCoaches < ActiveRecord::Migration[6.0]
  def change
    create_table :coaches do |t|
      t.string :name
      t.string :description
      t.string :about_me
      t.string :diplomes

      t.timestamps
    end
  end
end
