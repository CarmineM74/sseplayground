'use strict'
angular.module('sseAppApp.controllers')
  .controller('LoginController',
    class LoginController
      constructor: (@$location,@UsersService) ->
        console.log('[LoginController] initializing ...')

        @UsersService.currentUser().then((user) => @user = user)

      signup: {}
      login: {}
      user: null

      submitSignup: ->
        @UsersService.signup(@signup).then((user) =>
          console.log('[LoginController] registered as: ' + JSON.stringify(user))
          @signup.success = true
          @signup.errors = undefined
        ).catch((errors) =>
          console.log('[LoginController] Signup failed: ' + JSON.stringify(errors))
          @signup.success = false
          @signup.errors = errors
        )

      submitLogin: ->
        @UsersService.login(@login).then((user) =>
          console.log('[LoginController] logged in as: ' + JSON.stringify(user))
          @user = user
          @$location.path('/')
        )

  )
