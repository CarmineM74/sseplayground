class PostsController < ApplicationController

  before_filter :check_authorization

  def index
    posts = Post.all
    render status: :ok,
      json: posts.to_json
  end

  def create
    post = Post.new(params.require(:post).permit(:message))
    if post.save
      Redis.current.publish('posts.create',post.to_json)
      render status: :ok,
        json: post.to_json
    else
      render status: :unprocessable_entity,
        json: {
          errors: post.errors.to_json,
          info: "Failed to create"
        }
    end
  end

private

  def check_authorization
    render status: :unauthorized,
      json: {
        errors: ["Authorization required"]
      } and return false unless @user
  end

end
