class Coach < ApplicationRecord
  has_many :programs, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_one_attached :photo

  validates :name, presence: true
  validates :description, presence: true
  validates :about_me, presence: true
  validates :photo, presence: true

end
