'use strict'

angular.module('sseAppApp.directives')
  .directive('userPanel', ->
    {
      templateUrl: 'views/user_panel.html'
      controller: ($scope, UsersService) ->
        console.log('[UserPanelDirective] Initialized')
        UsersService.currentUser().then((user) ->
          $scope.currentUser = user
        )


        $scope.logout = ->
          UsersService.logout().then(->
            $scope.currentUser = null
          )
    }
)
