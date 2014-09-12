'use strict'

class LoginPage
  constructor: ->
    @loginForm = element(By.id('login-form'))
    @txtLoginEmail = element(By.model('ctrl.login.email'))
    @txtLoginPassword = element(By.model('ctrl.login.password'))
    @btnLogin = element(By.id('btnSubmitLogin'))

    @signupForm = element(By.id('signup-form'))

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


module.exports = LoginPage
