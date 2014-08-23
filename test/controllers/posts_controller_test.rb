require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  include AuthHelpers

  test "get index is not authorized if not logged in" do
    xhr :get, :index, format: :json
    assert_response :unauthorized
  end

  test "get index is successful if logged in" do
    login_as(users(:dexter))

    # ensure the request it not treated as batch request
    age_token(@user,@client_id)

    request.headers.merge!(@auth_headers)
    xhr :get, :index, format: :json

    get_response_auth_headers

    assert_response :ok
  end

end
