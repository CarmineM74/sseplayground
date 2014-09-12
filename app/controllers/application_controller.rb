class ApplicationController < ActionController::API
  # fixes devise error:
  # undefined local variable or method mimes_for_respond_to
  include ActionController::MimeResponds
  include DeviseTokenAuth::Concerns::SetUserByToken

end
