var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api').factory('uiGmapIWindow', [
  'uiGmapBaseObject', 'uiGmapChildEvents', 'uiGmapLogger', 'uiGmapCtrlHandle', function(BaseObject, ChildEvents, Logger, CtrlHandle) {
    var IWindow;
    return IWindow = (function(_super) {
      __extends(IWindow, _super);

      IWindow.include(ChildEvents);

      IWindow.extend(CtrlHandle);

      function IWindow() {
        this.restrict = 'EMA';
        this.template = void 0;
        this.transclude = true;
        this.priority = -100;
        this.require = '^' + 'uiGmapGoogleMap';
        this.replace = true;
        this.scope = {
          coords: '=coords',
          template: '=template',
          templateUrl: '=templateurl',
          templateParameter: '=templateparameter',
          isIconVisibleOnClick: '=isiconvisibleonclick',
          closeClick: '&closeclick',
          options: '=options',
          control: '=control',
          show: '=show'
        };
        this.$log = Logger;
      }

      return IWindow;

    })(BaseObject);
  }
]);
