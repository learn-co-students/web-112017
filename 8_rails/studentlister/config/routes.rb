Rails.application.routes.draw do
  resources :instructors
  get 'courses/index'

  get 'courses/show'

  get 'courses/new'

  get 'courses/create'

  resources :students # well if you're following restful conventions then I should know immediately where to go


  # get "/students" do
  #   a;lskfja;skdjf
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
