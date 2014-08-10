'use strict'

angular.module('sseAppApp.services')
  .service('UsersService',
    class UsersService
      constructor: (@$q,@$cookieStore)->
        console.log('[UsersService] initializing ...')

      _user: null

      setCurrentUser: (u) ->
        @_user = u
        @$cookieStore.put('user',u)

      currentUser: ->
        d = @$q.defer()

        if @_user
          d.resolve @_user
        else if @$cookieStore.get('user')
          @setCurrentUser(@$cookieStore.get('user'))
          d.resolve @_user
        else
          d.resolve null

        d.promise

      login: (user) ->
        d = @$q.defer()

        @setCurrentUser(user)
        d.resolve(user)

        d.promise

      logout: ->
        d = @$q.defer()

        @_user = null
        @$cookieStore.remove('user')
        d.resolve()

        d.promise
  )
