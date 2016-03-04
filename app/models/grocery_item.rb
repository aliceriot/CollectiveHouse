class GroceryItem < ActiveRecord::Base
  has_and_belongs_to_many :stores

  scope :unpurchased, -> { where(purchased: false) }
  scope :purchased, -> { where(purchased: true) }
end
