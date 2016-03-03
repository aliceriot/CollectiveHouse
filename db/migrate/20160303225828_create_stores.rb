class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.text :display_name, null: false, index: true

      t.timestamps null: false
    end
  end
end
