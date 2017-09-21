Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api do
    resources :users, only: [:create, :show], defaults: { format: :json }
    resource :session, only: [:create, :destroy], defaults: { format: :json }
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
