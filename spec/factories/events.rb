FactoryGirl.define do
  factory :event do
    title "An Event"
    start_time Time.now - 1.hour
    end_time Time.now + 1.hour
  end
end
