class CreateJoinTableGroceryStory < ActiveRecord::Migration
  def change
    create_join_table :grocery_items, :stores do |t|
      t.index [:store_id, :grocery_item_id]
      t.index [:grocery_item_id, :store_id]
    end
  end
end
