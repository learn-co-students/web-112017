Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :paintings, only: [:index, :show]
    end
  end

  post "/login", to: "auth#login"
  get "/current_user", to: "auth#currentUser"
end
