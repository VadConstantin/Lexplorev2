class AddThirdStepToPrograms < ActiveRecord::Migration[6.0]
  def change
    add_column :programs, :third_step, :string
  end
end
