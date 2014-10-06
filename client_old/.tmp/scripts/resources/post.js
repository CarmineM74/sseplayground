(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  angular.module('sseAppApp.resources').factory('Post', function($http, RailsResource) {
    var Post;
    return Post = (function(_super) {
      __extends(Post, _super);

      function Post() {
        return Post.__super__.constructor.apply(this, arguments);
      }

      Post.configure({
        url: '/api/posts',
        name: 'post'
      });

      return Post;

    })(RailsResource);
  });

}).call(this);

//# sourceMappingURL=post.js.map
