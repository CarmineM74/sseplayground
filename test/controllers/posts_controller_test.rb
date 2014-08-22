require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  include Devise::TestHelpers

  test "get index is not authorized if not logged in" do
    xhr :get, :index
    assert_response :unauthorized
  end

  test "get index is successful if logged in" do
    @user = users(:dexter)
    @user.skip_confirmation!
    @user.save!

    @auth_headers = @user.create_new_auth_token
    @token = @auth_headers['access-token']
    @client_id = @auth_headers['client']
    @expiry = @auth_headers['expiry']

    # ensure the request it not treated as batch request
    age_token(@user,@client_id)

    request.headers.merge!(@auth_headers)
    xhr :get, :index, format: :json

    assert_response :ok
  end

end
