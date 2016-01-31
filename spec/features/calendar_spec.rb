require 'rails_helper'

RSpec.describe "using the calendar" do
  include UserAccountHelper

  it "should show the calendar" do
    sign_in_test_user
    visit "/home"
    expect(page).to have_selector("#calendar")

  end
end
