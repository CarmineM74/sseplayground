describe 'main', ->

  describe 'when not logged in', ->

    ptor = undefined

    beforeEach ->
      browser.get('/')
      ptor = protractor.getInstance()

    it 'should redirect to login', ->
      expect(true).toBe true

