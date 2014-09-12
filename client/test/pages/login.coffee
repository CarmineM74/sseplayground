'use strict'

class LoginPage
  constructor: ->
    @txtUserName = element(By.model('ctrl.login.email'))
    @txtUserPassword = element(By.model('ctrl.login.password'))
    @btnLogin = element(By.id('btnSubmitLogin'))

  get: ->
    browser.get '#/login'
    browser.getCurrentUrl()

  setUserName: (userName) ->
    @txtUserName.sendKeys(userName)
    @

  setUserPassword: (password) ->
    @txtUserPassword.sendKeys(password)
    @

  clickLogin: ->
    @btnLogin.click()
    @


module.exports = LoginPage
