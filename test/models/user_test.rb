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

  test "User.inactives include Sgt. Doakes" do
    assert_includes User.inactives, users(:doakes)
    refute_includes User.inactives, users(:dexter)
  end

end
