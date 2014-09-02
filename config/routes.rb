require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'

  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :users, only: [:index]
    resources :posts
    get '/stream' => "streams#stream"
    get '/pdf' => "posts#pdf"
  end
end
