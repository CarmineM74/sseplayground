describe 'Login workflow', ->
  Pages = require('../pages')

  login = new Pages.LoginPage()
  home = new Pages.HomePage()

  beforeEach ->
    login.get()

  describe 'when on login page', ->
    it 'shows a login form', ->
      expect(login.loginForm.isPresent()).toBe(true)
      expect(login.txtLoginEmail.isPresent()).toBe(true)
      expect(login.txtLoginPassword.isPresent()).toBe(true)
      expect(login.btnLogin.isPresent()).toBe(true)

    it 'shows a singup form', ->
      expect(login.signupForm.isPresent()).toBe(true)

  describe 'when login fails', ->
    xit 'TODO: informs the user', ->
      expect(true).toBe(true)

  describe 'when login succeeds', ->

    afterEach ->
      home.lnkLogout.click()

    it 'redirects to home page', ->
      login
        .setUserName('carmine@moleti.it')
        .setUserPassword('testmeme')
        .clickLogin()

      expect(browser.getCurrentUrl()).toMatch(/#\/$/)
