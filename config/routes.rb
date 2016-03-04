Rails.application.routes.draw do
  devise_for :users
  root to: 'static_pages#home'

  # static pages
  get '/' => 'static_pages#home'
  get '/home' => 'static_pages#home'
  get '/groceries' => 'static_pages#grocery_list'

  # API
  get '/grocery_items/unpurchased' => 'grocery_items#unpurchased'
end
