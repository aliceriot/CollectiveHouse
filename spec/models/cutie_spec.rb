require 'rails_helper'

RSpec.describe Cutie, type: :model do
  it "should have a valid factory" do
    expect(FactoryGirl.create(:cutie)).to be_valid
  end
end
