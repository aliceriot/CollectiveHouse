module UserAccountHelper

  def create_test_user
    @user = FactoryGirl.create(:user)
  end

  def sign_in_test_user
    create_test_user
    log_in_as(@user, "asdfasdf")
  end

  def log_in_as(user, password)
    visit "/"
    fill_in "Email", with: user.email
    fill_in "Password", with: password
    click_on "Log in"
  end
end
