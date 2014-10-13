'use strict'
angular.module('saStudyApp.resources.user',[
  'rails',
  'ngResource'
])
  .factory('User', ($http,$q,RailsResource) ->
    class User extends RailsResource
      @configure
        url: '/api/users',
        name: 'user'

      @findById: (id) ->
        d = $q.defer()
        @query({id: id}).then((users) =>
          if users.length > 0
            user = users[0]
            d.resolve(user)
          else
            d.reject(null)
        )
        d.promise
  )

