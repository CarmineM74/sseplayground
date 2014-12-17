var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapControl", [
  "uiGmapIControl", "$http", "$templateCache", "$compile", "$controller", 'uiGmapGoogleMapApi', function(IControl, $http, $templateCache, $compile, $controller, GoogleMapApi) {
    var Control;
    return Control = (function(_super) {
      __extends(Control, _super);

      function Control() {
        this.link = __bind(this.link, this);
        Control.__super__.constructor.call(this);
      }

      Control.prototype.link = function(scope, element, attrs, ctrl) {
        return GoogleMapApi.then((function(_this) {
          return function(maps) {
            var index, position;
            if (angular.isUndefined(scope.template)) {
              _this.$log.error('mapControl: could not find a valid template property');
              return;
            }
            index = angular.isDefined(scope.index && !isNaN(parseInt(scope.index))) ? parseInt(scope.index) : void 0;
            position = angular.isDefined(scope.position) ? scope.position.toUpperCase().replace(/-/g, '_') : 'TOP_CENTER';
            if (!maps.ControlPosition[position]) {
              _this.$log.error('mapControl: invalid position property');
              return;
            }
            return IControl.mapPromise(scope, ctrl).then(function(map) {
              var control, controlDiv;
              control = void 0;
              controlDiv = angular.element('<div></div>');
              return $http.get(scope.template, {
                cache: $templateCache
              }).success(function(template) {
                var templateCtrl, templateScope;
                templateScope = scope.$new();
                controlDiv.append(template);
                if (index) {
                  controlDiv[0].index = index;
                }
                if (angular.isDefined(scope.controller)) {
                  templateCtrl = $controller(scope.controller, {
                    $scope: templateScope
                  });
                  controlDiv.children().data('$ngControllerController', templateCtrl);
                }
                return control = $compile(controlDiv.children())(templateScope);
              }).error(function(error) {
                return _this.$log.error('mapControl: template could not be found');
              }).then(function() {
                return map.controls[google.maps.ControlPosition[position]].push(control[0]);
              });
            });
          };
        })(this));
      };

      return Control;

    })(IControl);
  }
]);
