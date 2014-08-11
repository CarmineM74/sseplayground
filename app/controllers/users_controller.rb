class UsersController < ApplicationController

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

end

