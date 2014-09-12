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

    it 'has a logout link', ->
      expect(home.lnkLogout.isPresent()).toBe(true)

    it 'does not have a login link', ->
      expect(home.lnkLogin.isPresent()).toBe(false)

    it 'clicking on logout shows a login link and hides logout link', ->
      home.lnkLogout.click()
      expect(home.lnkLogin.isPresent()).toBe(true)
      expect(home.lnkLogout.isPresent()).toBe(false)

    it 'has a form to post messages', ->
      expect(home.postForm.isPresent()).toBe(true)

    it 'has a list with posted messages', ->
      expect(home.postsList).toBeDefined()

    it 'has a button to refresh posts list', ->
      expect(home.btnRefreshPosts.isPresent()).toBe(true)

    describe 'when posting a new message', ->
      it 'it appears at the endo of posts list after a refresh', ->
        home
          .setMessage('this is my new message')
          .postMessage()
          .refreshPosts()
        item = home.postsList.last()
        expect(item).toBeDefined()
        expect(item.getText()).toMatch(/.*: this is my new message/)
