'use strict'

angular.module('sseAppApp.services')
  .service('UsersService',
    class UsersService
      constructor: (@$q,@$cookieStore,@$rootScope,@$auth,@User)->
        console.log('[UsersService] initializing ...')

        @$rootScope.$on('event:unauthorized', => @logout())

      _user: null

      setCurrentUser: (id) ->
        @$cookieStore.put('user',id)
        console.log('[setCurrentUser] auth_headers: ' + JSON.stringify(@$cookieStore.get('auth_headers')))
        @User.findById(id).then((user) =>
          @_user = user
          @_user.auth_header = @$cookieStore.get('auth_header')
          #console.log('[setCurrentUser]: ' + JSON.stringify(@_user))
#          console.log('[setCurrentUser] parseExpiry: ' + @$auth.parseExpiry(@_user.auth_header))
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
