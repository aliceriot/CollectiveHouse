require 'rails_helper'

RSpec.describe Store, type: :model do
  it "should have a valid factory" do
    expect(FactoryGirl.create(:store)).to be_valid
  end
end
