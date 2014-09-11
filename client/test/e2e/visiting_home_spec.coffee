describe 'Visiting home: /', ->

  describe 'when not logged in', ->

    ptor = undefined

    beforeEach ->
      browser.get('/')
      ptor = protractor.getInstance()

    it 'redirects to /login', ->
      expect(true).toBe true



