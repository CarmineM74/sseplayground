(function() {
  'use strict';
  angular.module('sseAppApp.directives').directive('userPanel', function() {
    return {
      templateUrl: 'views/user_panel.html',
      controller: function($scope, UsersService) {
        console.log('[UserPanelDirective] Initialized');
        $scope.$on("user:set", function(evt, currentUser) {
          return $scope.currentUser = currentUser;
        });
        $scope.$on("user:unset", function(evt, currentUser) {
          return $scope.currentUser = null;
        });
        UsersService.currentUser().then(function(user) {
          return $scope.currentUser = user;
        });
        return $scope.logout = function() {
          return UsersService.logout().then(function() {
            return $scope.currentUser = null;
          });
        };
      }
    };
  });

}).call(this);

//# sourceMappingURL=user_panel.js.map
