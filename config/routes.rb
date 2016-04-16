Rails.application.routes.draw do
  devise_for :users
  root to: 'static_pages#home'

  # urls we want react-router to handle
  get '/' => 'static_pages#home'
  get '/calendar' => 'static_pages#home'
  get '/groceries' => 'static_pages#home'

  # API
  get '/grocery_items/unpurchased' => 'grocery_items#unpurchased'
end
