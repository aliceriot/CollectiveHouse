class Event < ActiveRecord::Base
  belongs_to :calendar
  has_and_belongs_to_many :house_members
end
