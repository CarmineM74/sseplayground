(function() {
  'use strict';
  var UsersService;

  angular.module('sseAppApp.services').service('UsersService', UsersService = (function() {
    function UsersService($q, $cookieStore, $rootScope, $auth, User) {
      this.$q = $q;
      this.$cookieStore = $cookieStore;
      this.$rootScope = $rootScope;
      this.$auth = $auth;
      this.User = User;
      console.log('[UsersService] initializing ...');
      this.$rootScope.$on('event:unauthorized', (function(_this) {
        return function() {
          return _this.logout();
        };
      })(this));
    }

    UsersService.prototype._user = null;

    UsersService.prototype.setCurrentUser = function(id) {
      id = id.id;
      this.$cookieStore.put('user', id);
      console.log('[setCurrentUser] auth_headers: ' + JSON.stringify(this.$cookieStore.get('auth_headers')));
      return this.User.findById(id).then((function(_this) {
        return function(user) {
          _this._user = user;
          _this._user.auth_header = _this.$cookieStore.get('auth_headers');
          return _this.$rootScope.$broadcast("user:set", _this._user);
        };
      })(this));
    };

    UsersService.prototype.unsetCurrentUser = function() {
      console.log('[unsetCurrentUser] Clearing user and cookies!');
      this._user = null;
      this.$cookieStore.remove('user');
      this.$cookieStore.remove('auth_headers');
      return this.$rootScope.$broadcast("user:unset");
    };

    UsersService.prototype.currentUser = function() {
      var d;
      d = this.$q.defer();
      this.$auth.validateUser().then((function(_this) {
        return function(x) {
          if (_this.$cookieStore.get('user')) {
            _this.setCurrentUser(_this.$cookieStore.get('user'));
            return d.resolve(_this._user);
          } else {
            return d.resolve(null);
          }
        };
      })(this))["catch"]((function(_this) {
        return function(e) {
          console.log("No valid authenticated user: " + JSON.stringify(e));
          return _this.unsetCurrentUser();
        };
      })(this));
      return d.promise;
    };

    UsersService.prototype.signup = function(user) {
      var d;
      d = this.$q.defer();
      this.$auth.submitRegistration(user).then((function(_this) {
        return function(resp) {
          return d.resolve(resp.data.data);
        };
      })(this))["catch"]((function(_this) {
        return function(resp) {
          console.log('Signup failed: ' + JSON.stringify(resp));
          _this.$auth.signOut();
          _this.unsetCurrentUser();
          return d.reject(resp.data.errors);
        };
      })(this));
      return d.promise;
    };

    UsersService.prototype.login = function(user) {
      var d;
      d = this.$q.defer();
      this.$auth.submitLogin(user).then((function(_this) {
        return function(id) {
          _this.setCurrentUser(id);
          return d.resolve(_this._user);
        };
      })(this));
      return d.promise;
    };

    UsersService.prototype.logout = function() {
      var d;
      d = this.$q.defer();
      this.$auth.signOut();
      this.unsetCurrentUser();
      d.resolve();
      return d.promise;
    };

    return UsersService;

  })());

}).call(this);

//# sourceMappingURL=users.js.map
