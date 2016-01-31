module UserAccountHelper

  def create_test_user
    @user = FactoryGirl.create(:user)
  end

  def sign_in_test_user
    create_test_user
    log_in_as @user
  end
end
