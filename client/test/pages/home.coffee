'use strict'

class HomePage
  constructor: ->
    @txtPostMessage = element(`by`.id('post_message'))

  get: ->
    browser.get '/'


module.exports = HomePage
