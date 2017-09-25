Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create show)
    resource :session, only: %i(create destroy)
    resources :pets, only: %i(index show create)
    resources :conversations, only: %i(index show create)
    resources :messages, only: %i(index show create)
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
