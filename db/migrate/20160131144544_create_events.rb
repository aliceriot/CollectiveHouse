class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, index: true
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.text :event_type

      t.timestamps null: false
    end
  end
end
