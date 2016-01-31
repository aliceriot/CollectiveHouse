class StaticPageController < ApplicationController
  def home
    render "hello, world"
  end
end
