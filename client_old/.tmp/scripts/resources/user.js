(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  angular.module('sseAppApp.resources').factory('User', function($http, $q, RailsResource) {
    var User;
    return User = (function(_super) {
      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.configure({
        url: '/api/users',
        name: 'user'
      });

      User.findById = function(id) {
        var d;
        d = $q.defer();
        this.query({
          id: id
        }).then((function(_this) {
          return function(users) {
            var user;
            if (users.length > 0) {
              user = users[0];
              return d.resolve(user);
            } else {
              return d.reject(null);
            }
          };
        })(this));
        return d.promise;
      };

      return User;

    })(RailsResource);
  });

}).call(this);

//# sourceMappingURL=user.js.map
