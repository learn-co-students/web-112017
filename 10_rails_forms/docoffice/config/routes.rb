Rails.application.routes.draw do
  
  resources :doctors, only: [:index, :new, :create, :show]
  resources :patients
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
