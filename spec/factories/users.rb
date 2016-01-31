FactoryGirl.define do
  factory :user, class: User do
    sequence(:email) { |n| "foobar#{n}@example.com" }
    password "asdfasdf"
  end
end
