describe 'Registration workflow', ->

  Pages = require('../pages')
  login = new Pages.LoginPage()

  beforeEach login.get()

  describe 'successful registration', ->

    login
      .setSignupEmail('anewuser@test.me')
      .setSignupPassword('incrediblepassword')
      .setSignupPasswordConfirmation('incrediblepassword')
      .singup()

