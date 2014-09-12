'use strict'

class HomePage
  constructor: ->
    @txtPostMessage = element(`by`.id('post_message'))
    @postForm = element(By.id('post-form'))
    @postsList = element.all(By.repeater('post in posts'))
    @btnRefreshPosts = element(By.id('refresh-posts'))
    @btnPostMessage = element(By.buttonText('Post'))
    @lnkLogout = element(By.id('logout'))
    @lnkLogin = element(By.id('login'))

  get: ->
    browser.get '/'
    browser.getCurrentUrl()

  setMessage: (message) ->
    @txtPostMessage.sendKeys(message)
    @

  postMessage: ->
    @btnPostMessage.click()
    @

  refreshPosts: ->
    @btnRefreshPosts.click()
    @

module.exports = HomePage
