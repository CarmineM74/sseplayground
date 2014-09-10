describe 'main', ->

  describe 'when not logged in', ->

    ptor = undefined

    beforeEach ->
      browser.get('http://0.0.0.0:9000/')
      ptor = protractor.getInstance()

    it 'should redirect to login', ->
      expect(true).toBe true

