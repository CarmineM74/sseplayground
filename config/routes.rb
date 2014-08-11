Rails.application.routes.draw do
  scope '/api' do
    devise_for :users, {
      registrations: "users/registrations"
    }
    resources :posts
    get '/stream' => "streams#stream"
  end
end
