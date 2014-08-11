Rails.application.routes.draw do
  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :users, only: [:index]
    resources :posts
    get '/stream' => "streams#stream"
  end
end
