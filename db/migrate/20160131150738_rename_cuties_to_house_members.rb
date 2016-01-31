class RenameCutiesToHouseMembers < ActiveRecord::Migration
  def change
    rename_table :cuties, :house_members
  end
end
