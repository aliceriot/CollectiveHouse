class CreateCalendars < ActiveRecord::Migration
  def change
    create_table :calendars do |t|
      t.string :display_name, index: true

      t.timestamps null: false
    end
    add_column :events, :calendar_id, :integer
    add_foreign_key :events, :calendars
  end
end
