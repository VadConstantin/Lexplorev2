class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :surname
      t.string :email
      t.string :content

      t.timestamps
    end
  end
end
