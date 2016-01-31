require 'rails_helper'

RSpec.describe HouseMember, type: :model do
  it "should have a valid factory" do
    expect(FactoryGirl.create(:house_member)).to be_valid
  end
end
