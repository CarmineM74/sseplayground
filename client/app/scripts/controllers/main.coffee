'use strict'

###*
 # @ngdoc function
 # @name sseAppApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the sseAppApp
###
angular.module('sseAppApp')
  .controller 'MainCtrl', ($scope,PostsService) ->
    $scope.posts = []
    $scope.post = {}

    stream = new EventSource('/api/stream')

    stream.addEventListener('open', (e) =>
      $scope.$apply(->
        console.log('Stream opened')
      )
    ,false)

    stream.addEventListener('posts.create', (e) =>
      $scope.$apply(
        console.log('Stream message:' + JSON.stringify(e.data))
        $scope.posts.unshift(JSON.parse(e.data))
      )
    ,false)

    PostsService.all().then((posts) =>
      $scope.posts = posts
    )

    $scope.postMessage = ->
      PostsService.save($scope.post)
