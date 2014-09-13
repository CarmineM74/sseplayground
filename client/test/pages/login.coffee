'use strict'

class LoginPage
  constructor: ->
    @loginForm = element(By.id('login-form'))
    @txtLoginEmail = element(By.model('ctrl.login.email'))
    @txtLoginPassword = element(By.model('ctrl.login.password'))
    @btnLogin = element(By.id('btnSubmitLogin'))
    @signupForm = element(By.id('signup-form'))
    @txtSignupEmail = element(By.id('signup-email'))
    @txtSignupPassword = element(By.id('signup-password'))
    @txtSignupPasswordConfirmation = element(By.id('signup-password-confirmation'))
    @btnSignup = element(By.id('btnSignup'))
    @successfulRegistrationBox = element(By.id('registration-successful'))
    @unsuccessfulRegistrationBox = element(By.id('registration-failed'))

  get: ->
    browser.get '#/login'
    browser.getCurrentUrl()

  setUserName: (userName) ->
    @txtLoginEmail.sendKeys(userName)
    @

  setUserPassword: (password) ->
    @txtLoginPassword.sendKeys(password)
    @

  clickLogin: ->
    @btnLogin.click()
    @

  setSignupEmail: (email) ->
    @txtSignupEmail.sendKeys(email)
    @

  setSignupPassword: (password) ->
    @txtSignupPassword.sendKeys(password)
    @

  setSignupPasswordConfirmation: (password_confirmation) ->
    @txtSignupPasswordConfirmation.sendKeys(password_confirmation)
    @

  signup: ->
    @btnSignup.click()
    @

module.exports = LoginPage
