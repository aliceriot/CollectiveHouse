class CreateJoinTableEventHouseMember < ActiveRecord::Migration
  def change
    create_join_table :events, :house_members do |t|
      t.index [:event_id, :house_member_id]
      t.index [:house_member_id, :event_id]
    end
  end
end
