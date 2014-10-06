(function () {
  'use strict';
  /**
    * @ngdoc overview
    * @name sseAppApp
    * @description
    * # sseAppApp
    *
    * Main module of the application.
   */
  angular.module('sseAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth',
    'sseAppApp.interceptors',
    'sseAppApp.directives',
    'sseAppApp.services',
    'sseAppApp.controllers',
    'sseAppApp.resources'
  ]).config([
    '$authProvider',
    '$compileProvider',
    function ($authProvider, $compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
      return $authProvider.configure({ apiUrl: '/api' });
    }
  ]).config([
    '$routeProvider',
    function ($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          auth: function ($auth) {
            console.log('Checking authorization for / ...');
            return $auth.validateUser().then(function (x) {
              return console.log(JSON.stringify(x));
            });
          }
        }
      }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController as ctrl'
      }).otherwise({ redirectTo: '/login' });
    }
  ]).run([
    '$rootScope',
    '$location',
    function ($rootScope, $location) {
      return $rootScope.$on('event:unauthorized', function () {
        return $location.path('/login');
      });
    }
  ]);
}.call(this));
//# sourceMappingURL=app.js.map
(function () {
  'use strict';
  angular.module('sseAppApp.interceptors', []).factory('AuthInterceptor', [
    '$q',
    '$rootScope',
    function ($q, $rootScope) {
      return {
        'responseError': function (respError) {
          if (respError.status === 401) {
            $rootScope.$broadcast('event:unauthorized');
          }
          return $q.reject(respError);
        }
      };
    }
  ]).config([
    '$httpProvider',
    function ($httpProvider) {
      return $httpProvider.interceptors.push('AuthInterceptor');
    }
  ]);
}.call(this));
//# sourceMappingURL=interceptors.js.map
(function () {
  'use strict';
  angular.module('sseAppApp.directives', []);
}.call(this));
//# sourceMappingURL=directives.js.map
(function () {
  'use strict';
  angular.module('sseAppApp.directives').directive('userPanel', function () {
    return {
      templateUrl: 'views/user_panel.html',
      controller: [
        '$scope',
        'UsersService',
        function ($scope, UsersService) {
          console.log('[UserPanelDirective] Initialized');
          $scope.$on('user:set', function (evt, currentUser) {
            return $scope.currentUser = currentUser;
          });
          $scope.$on('user:unset', function (evt, currentUser) {
            return $scope.currentUser = null;
          });
          UsersService.currentUser().then(function (user) {
            return $scope.currentUser = user;
          });
          return $scope.logout = function () {
            return UsersService.logout().then(function () {
              return $scope.currentUser = null;
            });
          };
        }
      ]
    };
  });
}.call(this));
//# sourceMappingURL=user_panel.js.map
(function () {
  'use strict';
  angular.module('sseAppApp.directives').directive('onScreenKeyboard', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: { layout: '=' },
      link: function (scope, element, attrs, ngModelController) {
        var layout;
        if (!ngModelController) {
          return;
        }
        console.log('[onScreenKeyboard] starting with layout ' + attrs.layout + ' ...');
        layout = 'qwerty';
        if (attrs.layout) {
          layout = attrs.layout;
        }
        return $(element).keyboard({
          autoAccept: true,
          stickyShift: true,
          usePreview: false,
          layout: layout
        });
      }
    };
  });
}.call(this));
//# sourceMappingURL=keyboard.js.map
(function () {
  'user strict';
  angular.module('sseAppApp.resources', ['rails']);
}.call(this));
//# sourceMappingURL=resources.js.map
(function () {
  'use strict';
  var __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('sseAppApp.resources').factory('Post', [
    '$http',
    'RailsResource',
    function ($http, RailsResource) {
      var Post;
      return Post = function (_super) {
        __extends(Post, _super);
        function Post() {
          return Post.__super__.constructor.apply(this, arguments);
        }
        Post.configure({
          url: '/api/posts',
          name: 'post'
        });
        return Post;
      }(RailsResource);
    }
  ]);
}.call(this));
//# sourceMappingURL=post.js.map
(function () {
  'use strict';
  var __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('sseAppApp.resources').factory('User', [
    '$http',
    '$q',
    'RailsResource',
    function ($http, $q, RailsResource) {
      var User;
      return User = function (_super) {
        __extends(User, _super);
        function User() {
          return User.__super__.constructor.apply(this, arguments);
        }
        User.configure({
          url: '/api/users',
          name: 'user'
        });
        User.findById = function (id) {
          var d;
          d = $q.defer();
          this.query({ id: id }).then(function (_this) {
            return function (users) {
              var user;
              if (users.length > 0) {
                user = users[0];
                return d.resolve(user);
              } else {
                return d.reject(null);
              }
            };
          }(this));
          return d.promise;
        };
        return User;
      }(RailsResource);
    }
  ]);
}.call(this));
//# sourceMappingURL=user.js.map
(function () {
  'use strict';
  angular.module('sseAppApp.services', []);
}.call(this));
//# sourceMappingURL=services.js.map
(function () {
  'use strict';
  var PostsService;
  angular.module('sseAppApp.services').service('PostsService', PostsService = function () {
    function PostsService($q, $http, $window, Post) {
      this.$q = $q;
      this.$http = $http;
      this.$window = $window;
      this.Post = Post;
      console.log('[PostsService] initializing ...');
    }
    PostsService.prototype.all = function () {
      var d;
      d = this.$q.defer();
      this.Post.query().then(function (posts) {
        return d.resolve(posts);
      });
      return d.promise;
    };
    PostsService.prototype.save = function (post) {
      var d;
      d = this.$q.defer();
      post = new this.Post({
        message: post.message,
        user_id: post.user_id
      }).create().then(function (savedPost) {
        return d.resolve(savedPost);
      });
      return d.promise;
    };
    PostsService.prototype.getPdf = function (path) {
      var d;
      d = this.$q.defer();
      this.Post.$get('/api/pdf', { path: './public/' + path }).then(function (data) {
        return d.resolve(data);
      });
      return d.promise;
    };
    return PostsService;
  }());
}.call(this));
//# sourceMappingURL=posts.js.map
(function () {
  'use strict';
  var UsersService;
  angular.module('sseAppApp.services').service('UsersService', UsersService = function () {
    function UsersService($q, $cookieStore, $rootScope, $auth, User) {
      this.$q = $q;
      this.$cookieStore = $cookieStore;
      this.$rootScope = $rootScope;
      this.$auth = $auth;
      this.User = User;
      console.log('[UsersService] initializing ...');
      this.$rootScope.$on('event:unauthorized', function (_this) {
        return function () {
          return _this.logout();
        };
      }(this));
    }
    UsersService.prototype._user = null;
    UsersService.prototype.setCurrentUser = function (id) {
      id = id.id;
      this.$cookieStore.put('user', id);
      console.log('[setCurrentUser] auth_headers: ' + JSON.stringify(this.$cookieStore.get('auth_headers')));
      return this.User.findById(id).then(function (_this) {
        return function (user) {
          _this._user = user;
          _this._user.auth_header = _this.$cookieStore.get('auth_headers');
          return _this.$rootScope.$broadcast('user:set', _this._user);
        };
      }(this));
    };
    UsersService.prototype.unsetCurrentUser = function () {
      console.log('[unsetCurrentUser] Clearing user and cookies!');
      this._user = null;
      this.$cookieStore.remove('user');
      this.$cookieStore.remove('auth_headers');
      return this.$rootScope.$broadcast('user:unset');
    };
    UsersService.prototype.currentUser = function () {
      var d;
      d = this.$q.defer();
      this.$auth.validateUser().then(function (_this) {
        return function (x) {
          if (_this.$cookieStore.get('user')) {
            _this.setCurrentUser(_this.$cookieStore.get('user'));
            return d.resolve(_this._user);
          } else {
            return d.resolve(null);
          }
        };
      }(this))['catch'](function (_this) {
        return function (e) {
          console.log('No valid authenticated user: ' + JSON.stringify(e));
          return _this.unsetCurrentUser();
        };
      }(this));
      return d.promise;
    };
    UsersService.prototype.signup = function (user) {
      var d;
      d = this.$q.defer();
      this.$auth.submitRegistration(user).then(function (_this) {
        return function (resp) {
          return d.resolve(resp.data.data);
        };
      }(this))['catch'](function (_this) {
        return function (resp) {
          console.log('Signup failed: ' + JSON.stringify(resp));
          _this.$auth.signOut();
          _this.unsetCurrentUser();
          return d.reject(resp.data.errors);
        };
      }(this));
      return d.promise;
    };
    UsersService.prototype.login = function (user) {
      var d;
      d = this.$q.defer();
      this.$auth.submitLogin(user).then(function (_this) {
        return function (id) {
          _this.setCurrentUser(id);
          return d.resolve(_this._user);
        };
      }(this));
      return d.promise;
    };
    UsersService.prototype.logout = function () {
      var d;
      d = this.$q.defer();
      this.$auth.signOut();
      this.unsetCurrentUser();
      d.resolve();
      return d.promise;
    };
    return UsersService;
  }());
}.call(this));
//# sourceMappingURL=users.js.map
(function () {
  'use strict';
  angular.module('sseAppApp.controllers', []);
}.call(this));
//# sourceMappingURL=controllers.js.map
(function () {
  'use strict';
  /**
    * @ngdoc function
    * @name sseAppApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the sseAppApp
   */
  angular.module('sseAppApp').controller('MainCtrl', [
    '$scope',
    '$window',
    '$sce',
    'PostsService',
    'UsersService',
    function ($scope, $window, $sce, PostsService, UsersService) {
      var stream;
      $scope.posts = [];
      $scope.post = {};
      stream = new EventSource('/api/stream');
      stream.addEventListener('open', function (_this) {
        return function (e) {
          return $scope.$apply(function () {
            return console.log('Stream OPENED!');
          });
        };
      }(this), false);
      stream.addEventListener('heartbeat', function (_this) {
        return function (e) {
          return $scope.$apply(function () {
            return console.log('*** heartbeat ***');
          });
        };
      }(this), false);
      stream.addEventListener('posts.create', function (_this) {
        return function (e) {
          return $scope.$apply(console.log('Stream message:' + JSON.stringify(e.data)), $scope.posts.unshift(JSON.parse(e.data)));
        };
      }(this), false);
      stream.addEventListener('posts.flush', function (_this) {
        return function (e) {
          return $scope.$apply(console.log('Posts flushed!' + JSON.stringify(e.data)), $scope.refreshPosts());
        };
      }(this), false);
      stream.addEventListener('posts.pdf', function (_this) {
        return function (e) {
          return $scope.$apply(console.log('PDF READY!' + JSON.stringify(e.data)), PostsService.getPdf(e.data).then(function (data) {
            var blob, url;
            blob = new Blob([data], { type: 'application/pdf' });
            url = ($window.URL || window.webkitURL).createObjectURL(blob);
            return $scope.pdf_path = $sce.trustAsResourceUrl(url);
          }));
        };
      }(this), false);
      $scope.refreshPosts = function () {
        return PostsService.all().then(function (_this) {
          return function (posts) {
            console.log('Requesting all posts ...');
            return $scope.posts = posts;
          };
        }(this));
      };
      $scope.postMessage = function () {
        return UsersService.currentUser().then(function (user) {
          $scope.post.user_id = user.id;
          return PostsService.save($scope.post);
        });
      };
      return $scope.refreshPosts();
    }
  ]);
}.call(this));
//# sourceMappingURL=main.js.map
(function () {
  'use strict';
  var LoginController;
  angular.module('sseAppApp.controllers').controller('LoginController', LoginController = function () {
    function LoginController($location, UsersService) {
      this.$location = $location;
      this.UsersService = UsersService;
      console.log('[LoginController] initializing ...');
      this.UsersService.currentUser().then(function (_this) {
        return function (user) {
          return _this.user = user;
        };
      }(this));
    }
    LoginController.prototype.signup = {};
    LoginController.prototype.login = {};
    LoginController.prototype.user = null;
    LoginController.prototype.submitSignup = function () {
      return this.UsersService.signup(this.signup).then(function (_this) {
        return function (user) {
          console.log('[LoginController] registered as: ' + JSON.stringify(user));
          _this.signup.success = true;
          return _this.signup.errors = void 0;
        };
      }(this))['catch'](function (_this) {
        return function (errors) {
          console.log('[LoginController] Signup failed: ' + JSON.stringify(errors));
          _this.signup.success = false;
          return _this.signup.errors = errors;
        };
      }(this));
    };
    LoginController.prototype.submitLogin = function () {
      return this.UsersService.login(this.login).then(function (_this) {
        return function (user) {
          console.log('[LoginController] logged in as: ' + JSON.stringify(user));
          _this.user = user;
          return _this.$location.path('/');
        };
      }(this));
    };
    return LoginController;
  }());
}.call(this));  //# sourceMappingURL=login.js.map
