describe 'Registration workflow', ->

  Pages = require('../pages')
  login = new Pages.LoginPage()
  # tricky and dangerous workaround since there still is a chance that
  # multiple execution of this specs happen within the same millisecond
  # of previous ones. Thus this may fail unexpectedly
  # Needs something along the lines of Faker gem, or a database clean
  # after the specs have run.
  username = 'anewuser_' + (new Date()).getMilliseconds() + '@test.me'

  beforeEach ->
    login.get()

  describe 'successful registration', ->
    it 'shows a confirmation box', ->
      login
        .setSignupEmail(username)
        .setSignupPassword('incrediblepassword')
        .setSignupPasswordConfirmation('incrediblepassword')
        .signup()

      expect(login.successfulRegistrationBox.isPresent()).toBe(true)
      expect(login.unsuccessfulRegistrationBox.isPresent()).toBe(false)

  describe 'unsuccessful registration', ->
    it 'shows an error box with failure reasons', ->
      login
        .setSignupEmail(username)
        .setSignupPassword('testmeme')
        .setSignupPasswordConfirmation('testmeme')
        .signup()

      expect(login.successfulRegistrationBox.isPresent()).toBe(false)
      expect(login.unsuccessfulRegistrationBox.isPresent()).toBe(true)

