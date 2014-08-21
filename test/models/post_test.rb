require 'test_helper'

class PostTest < ActiveSupport::TestCase

  test "all fixtures must be valid" do
    Post.all.each do |p|
      assert_valid p
    end
  end

  test "must have a message" do
    assert_invalid Post.new, message: "can't be blank"
  end

  test "must have a user associated" do
    assert_invalid Post.new(message: "meh!")
    assert_valid Post.new(message: "Hello dark passenger", user: users(:dexter))
  end

end
