ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

require 'helpers/test_password'

ActiveRecord::FixtureSet.context_class.send :include, TestPasswordHelper

class ActiveSupport::TestCase
  include TestPasswordHelper
  ActiveRecord::Migration.check_pending!
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all


  def assert_valid(record, message = nil)
    message ||= "Expceted #{record.inspect} to be valid"
    assert record.valid?, message
  end

  def assert_invalid(record, options = {})
    assert record.invalid?, "Expceted #{record.inspect} to be invalid"
    options.each do |attribute, message|
      assert_includes record.errors[attribute], message
    end
  end

  def age_token(user, client_id)
    user.tokens[client_id]['updated_at'] = Time.now - (DeviseTokenAuth.batch_request_buffer_throttle + 10.seconds)
    user.save
  end

  def expire_token(user, client_id)
    user.tokens[client_id]['expiry'] = (Time.now - (DeviseTokenAuth.token_lifespan.to_f + 10.seconds)).to_i
    user.save
  end

end

