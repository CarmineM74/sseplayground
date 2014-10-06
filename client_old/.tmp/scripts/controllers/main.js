(function() {
  'use strict';

  /**
    * @ngdoc function
    * @name sseAppApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the sseAppApp
   */
  angular.module('sseAppApp').controller('MainCtrl', function($scope, $window, $sce, PostsService, UsersService) {
    var stream;
    $scope.posts = [];
    $scope.post = {};
    stream = new EventSource('/api/stream');
    stream.addEventListener('open', (function(_this) {
      return function(e) {
        return $scope.$apply(function() {
          return console.log('Stream OPENED!');
        });
      };
    })(this), false);
    stream.addEventListener('heartbeat', (function(_this) {
      return function(e) {
        return $scope.$apply(function() {
          return console.log('*** heartbeat ***');
        });
      };
    })(this), false);
    stream.addEventListener('posts.create', (function(_this) {
      return function(e) {
        return $scope.$apply(console.log('Stream message:' + JSON.stringify(e.data)), $scope.posts.unshift(JSON.parse(e.data)));
      };
    })(this), false);
    stream.addEventListener('posts.flush', (function(_this) {
      return function(e) {
        return $scope.$apply(console.log('Posts flushed!' + JSON.stringify(e.data)), $scope.refreshPosts());
      };
    })(this), false);
    stream.addEventListener('posts.pdf', (function(_this) {
      return function(e) {
        return $scope.$apply(console.log('PDF READY!' + JSON.stringify(e.data)), PostsService.getPdf(e.data).then(function(data) {
          var blob, url;
          blob = new Blob([data], {
            type: 'application/pdf'
          });
          url = ($window.URL || window.webkitURL).createObjectURL(blob);
          return $scope.pdf_path = $sce.trustAsResourceUrl(url);
        }));
      };
    })(this), false);
    $scope.refreshPosts = function() {
      return PostsService.all().then((function(_this) {
        return function(posts) {
          console.log("Requesting all posts ...");
          return $scope.posts = posts;
        };
      })(this));
    };
    $scope.postMessage = function() {
      return UsersService.currentUser().then(function(user) {
        $scope.post.user_id = user.id;
        return PostsService.save($scope.post);
      });
    };
    return $scope.refreshPosts();
  });

}).call(this);

//# sourceMappingURL=main.js.map
