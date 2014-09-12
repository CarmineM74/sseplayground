'use strict'
angular.module('sseAppApp.controllers')
  .controller('LoginController',
    class LoginController
      constructor: (@$location,@UsersService) ->
        console.log('[LoginController] initializing ...')

        @UsersService.currentUser().then((user) => @user = user)

      singup: {}
      login: {}
      user: null

      submitSignup: ->
        @UsersService.signup(@signup).then((user) =>
          console.log('[LoginController] registered as: ' + JSON.stringify(user))
          @$location.path('/')
        )

      submitLogin: ->
        @UsersService.login(@login).then((user) =>
          console.log('[LoginController logged in as: ' + JSON.stringify(user))
          @user = user
          @$location.path('/')
        )

  )
