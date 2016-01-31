require 'rails_helper'

RSpec.describe Calendar, type: :model do
  it "should have a valid factory" do
    expect(FactoryGirl.create(:calendar)).to be_valid
  end
end
