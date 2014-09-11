describe 'Visiting home: /', ->

  # PageObjects bulk require
  # http://spin.atomicobject.com/2014/08/08/page-objects-angular-protractor-specs/
  Pages = require('../pages')

  describe 'when not logged in', ->

    ptor = undefined

    beforeEach ->
      home = new Pages.HomePage()
      home.get()
      ptor = protractor.getInstance()

    it 'redirects to /login', ->
      expect(ptor.getCurrentUrl()).toMatch(/\/login/)


