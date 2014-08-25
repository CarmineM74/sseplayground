'use strict'

###*
 # @ngdoc function
 # @name sseAppApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the sseAppApp
###
angular.module('sseAppApp')
  .controller 'MainCtrl', ($scope,PostsService,UsersService) ->
    $scope.posts = []
    $scope.post = {}

    stream = new EventSource('/api/stream')

    stream.addEventListener('open', (e) =>
      $scope.$apply(->
        console.log('Stream OPENED!')
      )
    ,false)

    stream.addEventListener('heartbeat', (e) =>
      $scope.$apply(->
        console.log('*** heartbeat ***')
      )
    ,false)

    stream.addEventListener('posts.create', (e) =>
      $scope.$apply(
        console.log('Stream message:' + JSON.stringify(e.data))
        $scope.posts.unshift(JSON.parse(e.data))
      )
    ,false)

    stream.addEventListener('posts.flush', (e) =>
      $scope.$apply(
        console.log('Posts flushed!' + JSON.stringify(e.data))
        $scope.refreshPosts()
      )
    ,false)

    $scope.refreshPosts = ->
      PostsService.all().then((posts) =>
        console.log("Requesting all posts ...")
        $scope.posts = posts
      )

    $scope.postMessage = ->
      UsersService.currentUser().then((user) ->
        $scope.post.user_id = user.id
        PostsService.save($scope.post)
      )

    $scope.refreshPosts()
