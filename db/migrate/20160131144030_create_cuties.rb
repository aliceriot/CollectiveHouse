class CreateCuties < ActiveRecord::Migration
  def change
    create_table :cuties do |t|
      t.string :first_name, null: false, index: true

      t.timestamps null: false
    end
  end
end
