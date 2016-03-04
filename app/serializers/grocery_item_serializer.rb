class GroceryItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :purchased, :cost_in_cents

  has_many :stores
end
