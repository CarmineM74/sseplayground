describe 'Visiting home: /', ->

  HomePage = require('../pages/home.coffee')

  describe 'when not logged in', ->

    ptor = undefined

    beforeEach ->
      home = new HomePage()
      home.get()
      ptor = protractor.getInstance()

    it 'redirects to /login', ->
      expect(ptor.getCurrentUrl()).toMatch(/\/login/)


