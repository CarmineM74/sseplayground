class UsersController < ApplicationController
  before_filter :check_authorization

  def index
    @users = User.where(params.permit(:id,:email))
    if @users
      render status: :ok,
        json: @users.to_json
    else
      render status: :not_found,
        json: {
          error: "User not found"
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

