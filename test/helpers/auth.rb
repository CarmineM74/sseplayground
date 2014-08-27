module AuthHelpers

  def self.included(mod)
    # automatically include Devise::TestHelpers into including module/class
    mod.class_eval "include Devise::TestHelpers"
  end

  def login_as(user)
    @user = users(:dexter)
    @user.skip_confirmation!
    @user.save!

    @auth_headers = @user.create_new_auth_token
    @token = @auth_headers['access-token']
    @client_id = @auth_headers['client']
    @expiry = @auth_headers['expiry']

    age_token(@user,@client_id)
    request.headers.merge!(@auth_headers)
  end

  def logout
    expire_token(@user,@client_id)
  end

  def get_response_auth_headers
    @resp_token = response.headers['access-token']
    @resp_client_id = response.headers['client']
    @resp_expiry = response.headers['expiry']
    @resp_uid = response.headers['uid']
  end

  # Prevents successive requests from being considered as a batch.
  def age_token(user, client_id)
    user.tokens[client_id]['updated_at'] = Time.now - (DeviseTokenAuth.batch_request_buffer_throttle + 10.seconds)
    user.save
  end

  def expire_token(user, client_id)
    user.tokens[client_id]['expiry'] = (Time.now - (DeviseTokenAuth.token_lifespan.to_f + 10.seconds)).to_i
    user.save
  end
end

