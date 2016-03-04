class CreateGroceryItems < ActiveRecord::Migration
  def change
    create_table :grocery_items do |t|
      t.text :name, null: false
      t.integer :quantity
      t.boolean :purchased, default: false
      t.integer :cost_in_cents
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
