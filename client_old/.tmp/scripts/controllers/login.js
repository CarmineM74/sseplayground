(function() {
  'use strict';
  var LoginController;

  angular.module('sseAppApp.controllers').controller('LoginController', LoginController = (function() {
    function LoginController($location, UsersService) {
      this.$location = $location;
      this.UsersService = UsersService;
      console.log('[LoginController] initializing ...');
      this.UsersService.currentUser().then((function(_this) {
        return function(user) {
          return _this.user = user;
        };
      })(this));
    }

    LoginController.prototype.signup = {};

    LoginController.prototype.login = {};

    LoginController.prototype.user = null;

    LoginController.prototype.submitSignup = function() {
      return this.UsersService.signup(this.signup).then((function(_this) {
        return function(user) {
          console.log('[LoginController] registered as: ' + JSON.stringify(user));
          _this.signup.success = true;
          return _this.signup.errors = void 0;
        };
      })(this))["catch"]((function(_this) {
        return function(errors) {
          console.log('[LoginController] Signup failed: ' + JSON.stringify(errors));
          _this.signup.success = false;
          return _this.signup.errors = errors;
        };
      })(this));
    };

    LoginController.prototype.submitLogin = function() {
      return this.UsersService.login(this.login).then((function(_this) {
        return function(user) {
          console.log('[LoginController] logged in as: ' + JSON.stringify(user));
          _this.user = user;
          return _this.$location.path('/');
        };
      })(this));
    };

    return LoginController;

  })());

}).call(this);

//# sourceMappingURL=login.js.map
