Rails.application.routes.draw do
  scope '/api' do
    resources :posts
    get '/stream' => "streams#stream"
  end
end
