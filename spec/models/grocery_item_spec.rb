require 'rails_helper'

RSpec.describe GroceryItem, type: :model do
  it "should have a valid factory" do
    expect(FactoryGirl.create(:grocery_item)).to be_valid
  end
end
