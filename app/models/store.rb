class Store < ActiveRecord::Base
  has_and_belongs_to_many :grocery_items
end
