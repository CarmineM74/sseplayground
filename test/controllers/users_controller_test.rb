require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  include AuthHelpers

  test "get index fails when not logged in" do
    xhr :get, :index, format: :json
    assert_response :unauthorized
  end

  test "get index succeed when logged in" do
    login_as(users(:dexter))
    age_token(@user,@client_id)
    request.headers.merge!(@auth_headers)
    xhr :get, :index, format: :json
    assert_response :ok
  end

end

