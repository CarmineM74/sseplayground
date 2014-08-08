'use strict'
angular.module('sseAppApp.resources',['rails'])
  .factory('Post', ($http,RailsResource) ->
    class Post extends RailsResource
      @configure
        url: '/api/posts',
        name: 'post'
  )
