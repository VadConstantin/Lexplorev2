class Coach < ApplicationRecord
  has_many :programs
  has_many :reviews
  has_one_attached :photo

  validates :name, presence: true
  validates :description, presence: true
  validates :about_me, presence: true
  validates :photo, presence: true

end
