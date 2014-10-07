'use strict'

###*
 # @ngdoc function
 # @name sseAppApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the sseAppApp
###
angular.module('sseAppApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
