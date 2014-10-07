'use strict'
angular.module('sseAppApp.resources')
  .factory('Post', ($http,RailsResource) ->
    class Post extends RailsResource
      @configure
        url: '/api/posts',
        name: 'post'
  )
