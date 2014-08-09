'use strict'
angular.module('sseAppApp.controllers')
  .controller('LoginController',
    class LoginController
      constructor: ->
        console.log('[LoginController] initializing ...')

      singup: {}
      login: {}

      submitSignup: ->
        console.log('[LoginController] signup: ' + JSON.stringify(@signup))

      submitLogin: ->
        console.log('[LoginController] login: ' + JSON.stringify(@login))

  )
