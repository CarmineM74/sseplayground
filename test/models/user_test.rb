require 'test_helper'
require 'minitest/pride'

class UserTest < ActiveSupport::TestCase
  test "all fixtures must be valid" do
    User.all.each do |u|
      assert_valid u
    end
  end

  test "must have an email " do
    assert_invalid User.new, email: "can't be blank"
  end

  test "must have unique email" do
    bayharbor_butcher = User.new(email: users(:dexter).email)
    assert_invalid bayharbor_butcher
    assert_includes bayharbor_butcher.errors[:email], 'has already been taken'
  end

  test "must have a password" do
    assert_invalid User.new(email: "iam@invalid.com")
    assert_valid User.new(email: "iam@valid.com", password: default_password)
  end

  test "minimum password length is 8" do
    assert_invalid User.new(email: "iam@invalid.com", password: "short"), password: "is too short (minimum is 8 characters)"
  end

  test "User.inactives include Sgt. Doakes" do
    assert_includes User.inactives, users(:doakes)
    refute_includes User.inactives, users(:dexter)
  end

end
