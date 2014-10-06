(function() {
  'use strict';
  var PostsService;

  angular.module('sseAppApp.services').service('PostsService', PostsService = (function() {
    function PostsService($q, $http, $window, Post) {
      this.$q = $q;
      this.$http = $http;
      this.$window = $window;
      this.Post = Post;
      console.log('[PostsService] initializing ...');
    }

    PostsService.prototype.all = function() {
      var d;
      d = this.$q.defer();
      this.Post.query().then(function(posts) {
        return d.resolve(posts);
      });
      return d.promise;
    };

    PostsService.prototype.save = function(post) {
      var d;
      d = this.$q.defer();
      post = new this.Post({
        message: post.message,
        user_id: post.user_id
      }).create().then(function(savedPost) {
        return d.resolve(savedPost);
      });
      return d.promise;
    };

    PostsService.prototype.getPdf = function(path) {
      var d;
      d = this.$q.defer();
      this.Post.$get('/api/pdf', {
        path: './public/' + path
      }).then(function(data) {
        return d.resolve(data);
      });
      return d.promise;
    };

    return PostsService;

  })());

}).call(this);

//# sourceMappingURL=posts.js.map
