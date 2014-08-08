'use strict'

angular.module('sseAppApp')
  .service('PostsService',
    class PostsService
      constructor: (@$q,@$http) ->
        console.log('[PostsService] initializing ...')

      all: ->
        d = @$q.defer()
        @$http({
          method: 'GET'
          url: 'http://localhost:3000/api/posts'
        }).then((response) ->
          d.resolve(response.data)
        ,(reason) ->
          d.reject(reason)
        )

        d.promise

      save: (post) ->
        d = @$q.defer()
        @$http.post('http://localhost:3000/api/posts', {post: post})
          .success((response) -> d.resolve(response.data))

        d.promise
    )
