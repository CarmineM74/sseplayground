describe 'Visiting home: /', ->

  # PageObjects bulk require
  # http://spin.atomicobject.com/2014/08/08/page-objects-angular-protractor-specs/
  Pages = require('../pages')

  home = new Pages.HomePage()
  ptor = protractor.getInstance()

  describe 'when not logged in', ->

    it 'redirects to /login', ->
      expect(home.get()).toMatch(/\/login/)


