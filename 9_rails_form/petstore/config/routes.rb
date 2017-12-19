Rails.application.routes.draw do



  resources :pets

  # get "/pets/:id", to: "pets#show", as: "bacon"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
