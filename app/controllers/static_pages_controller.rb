class StaticPagesController < ApplicationController
  def home
    render :home
  end

  def grocery_list
    render :grocery_list
  end
end
