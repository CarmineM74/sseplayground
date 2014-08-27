ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

require 'minitest/mock'
require 'helpers/test_password'
require 'helpers/auth'

ActiveRecord::FixtureSet.context_class.send :include, TestPasswordHelpers

class ActiveSupport::TestCase
  include TestPasswordHelpers
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

end

