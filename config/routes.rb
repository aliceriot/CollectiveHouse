Rails.application.routes.draw do
  get 'react_examples/component', to: 'react_examples#component', as: :component
  devise_for :users
  root to: 'static_pages#home'

  get '/' => 'static_pages#home'
  get '/home' => 'static_pages#home'
end
