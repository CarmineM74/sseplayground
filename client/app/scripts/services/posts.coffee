'use strict'

angular.module('sseAppApp.services')
  .service('PostsService',
    class PostsService
      constructor: (@$q,@$http,@Post) ->
        console.log('[PostsService] initializing ...')

      all: ->
        d = @$q.defer()
        @Post.query().then((posts) ->
          d.resolve(posts)
        )
        d.promise

      save: (post) ->
        d = @$q.defer()
        post = new @Post(
          {message: post.message, user_id: post.user_id}
        ).create().then((savedPost) ->
          d.resolve(savedPost)
        )

        d.promise
    )
