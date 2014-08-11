'use strict'
angular.module('sseAppApp.resources')
  .factory('User', ($http,$q,RailsResource) ->
    class User extends RailsResource
      @configure
        url: '/api/users',
        name: 'user'

      @findById: (id) ->
        d = $q.defer()
        @query({user_id: id}).then((users) =>
          if users.length > 0
            user = users[0]
            d.resolve(user)
          else
            d.reject(null)
        )
        d.promise
  )

