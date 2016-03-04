class GroceryItemsController < ApplicationController
  def unpurchased
    render json: GroceryItem.unpurchased
  end
end
