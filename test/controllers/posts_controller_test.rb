require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  include AuthHelpers

  test "get index is not authorized if not logged in" do
    xhr :get, :index, format: :json
    assert_response :unauthorized
  end

  test "get index is successful if logged in" do
    login_as(users(:dexter))

    age_token(@user,@client_id)

    request.headers.merge!(@auth_headers)
    xhr :get, :index, format: :json

    get_response_auth_headers

    assert_response :ok
    refute_equal @resp_token,@token
  end

  test "post create is not authorized if not logged in" do
    post = Post.new(message: 'a brave new world')
    xhr :post, :create, format: :json, post: post.to_json
    assert_response :unauthorized
  end

  test "post create is unsuccessful when data is not valid" do
    post = Post.new(message: 'a brave new world')
    login_as(users(:dexter))
    age_token(@user,@client_id)
    request.headers.merge!(@auth_headers)
    xhr :post, :create, format: :json, post: post.attributes
    assert_response :unprocessable_entity
  end

  test "post create is successful when logged in and data is valid" do
    post = Post.new(message: 'a brave new world', user_id: users(:dexter).id)
    login_as(users(:dexter))
    age_token(@user,@client_id)
    request.headers.merge!(@auth_headers)
    xhr :post, :create, format: :json, post: post.attributes
    assert_response :ok

    # checks that response returns the created post
    created_post = JSON.parse(response.body)
    assert_equal created_post['message'], post.message
  end

  test "post create when sucessful publish 'posts.create' to redis" do
    post = Post.new(message: 'a brave new world', user_id: users(:dexter).id)
    login_as(users(:dexter))
    age_token(@user,@client_id)
    request.headers.merge!(@auth_headers)

    redis_mock = MiniTest::Mock.new

    Redis.current = redis_mock
    # We cannot be more specific about what is published to Redis
    # since we lack of post's id,created_at,updated_at informations
    redis_mock.expect(:publish,nil,['posts.create', String])

    xhr :post, :create, format: :json, post: post.attributes
    assert_response :ok

  end

end
