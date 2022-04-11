class Contact < ApplicationRecord

  validates :first_name, presence: :true
  validates :surname, presence: true
  validates :email, presence: true
  validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/
  validates :content, presence: true

end
