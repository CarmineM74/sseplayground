module TestPasswordHelper
  def password_digest(password)
    User.new.send(:password_digest,password)
  end

  def default_password
    "my super secret"
  end
end
