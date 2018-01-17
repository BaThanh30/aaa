Rails.application.routes.draw do
  resources :high_scores
  get 'greetings/hello'

  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
