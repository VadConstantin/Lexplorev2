Rails.application.routes.draw do
  get 'contacts/index'
  get 'contacts/create'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 root to: 'pages#home'

 get '/admin', to: 'pages#admin'
  resources :coaches do
    resources :programs
    resources :reviews
  end

  resource :contacts, only: [:new, :create]

  get '/programmes', to: 'pages#programmes'
  get '/bilan', to: 'pages#bilan'
  get '/coaching', to: 'pages#coaching'
  get '/coaching-cible', to: 'pages#coachingcible'


end
