class CreatePrograms < ActiveRecord::Migration[6.0]
  def change
    create_table :programs do |t|
      t.string :name
      t.string :description
      t.string :details
      t.string :first_step
      t.string :second_step
      t.string :role
      t.string :questions
      t.references :coach, null: false, foreign_key: true

      t.timestamps
    end
  end
end
