describe 'Visiting /:', ->

  # PageObjects bulk require
  # http://spin.atomicobject.com/2014/08/08/page-objects-angular-protractor-specs/
  Pages = require('../pages')

  home = new Pages.HomePage()
  login = new Pages.LoginPage()
  ptor = protractor.getInstance()

  describe 'when not logged in', ->

    it 'redirects to /login', ->
      expect(home.get()).toMatch(/#\/login$/)

  describe 'after log in', ->

    beforeEach ->
      login.get()
      login
        .setUserName('carmine@moleti.it')
        .setUserPassword('testmeme')
        .clickLogin()

    it 'is on /', ->
      expect(ptor.getCurrentUrl()).toMatch(/#\/$/)

    it 'has a form to post messages', ->
      expect(home.postForm).toBeDefined()

