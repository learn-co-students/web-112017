Rails.application.routes.draw do
  
  resources :songs
  # get "/songs", to: "songs#index"
  # get "/songs/new", to: "songs#new"
  # get "/songs/:id", to: "songs#show"
  # post "/songs", to: "songs#create"
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
