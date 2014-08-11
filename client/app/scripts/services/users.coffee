'use strict'

angular.module('sseAppApp.services')
  .service('UsersService',
    class UsersService
      constructor: (@$q,@$cookieStore,@$rootScope,@$auth,@User)->
        console.log('[UsersService] initializing ...')

      _user: null

      setCurrentUser: (id) ->
        @$cookieStore.put('user',id)
        @User.findById(id).then((user) =>
          @_user = user
          @$rootScope.$broadcast("user:set", @_user)
        )

      unsetCurrentUser: ->
        @_user = null
        @$cookieStore.remove('user')
        @$rootScope.$broadcast("user:unset")

      currentUser: ->
        d = @$q.defer()

        @$auth.validateUser().then((x) =>
          if @$cookieStore.get('user')
            @setCurrentUser(@$cookieStore.get('user'))
          else
            d.resolve null
        ).catch((e) =>
          console.log("No valid authenticated user: " + JSON.stringify(e))
          @unsetCurrentUser()
        )

        d.promise

      login: (user) ->
        d = @$q.defer()

        @$auth.submitLogin(user).then((id) =>
          @setCurrentUser(id)
          d.resolve(@_user)
        )

        d.promise

      logout: ->
        d = @$q.defer()

        @$auth.signOut()
        @unsetCurrentUser()
        d.resolve()

        d.promise
  )
