'use strict'

angular.module('saStudyApp.visitor.login',[
  'saStudyApp.services.authorization'
])
  .controller('LoginController',
    class LoginController
      constructor: (@AuthorizationService) ->
        console.log('[LoginController] initializing ...')

      signup: {}
      login: {}
      user: null

      submitLogin: ->
        @AuthorizationService.login(@login)
          .then((user) =>
            @user = user
            @login = {}
          )

  )
