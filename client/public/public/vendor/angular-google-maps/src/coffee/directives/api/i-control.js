
/*
 - interface for all controls to derive from
 - to enforce a minimum set of requirements
	- attributes
		- template
		- position
		- controller
		- index
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIControl", [
  "uiGmapBaseObject", "uiGmapLogger", "uiGmapCtrlHandle", function(BaseObject, Logger, CtrlHandle) {
    var IControl;
    return IControl = (function(_super) {
      __extends(IControl, _super);

      IControl.extend(CtrlHandle);

      function IControl() {
        this.restrict = 'EA';
        this.replace = true;
        this.require = '^' + 'uiGmapGoogleMap';
        this.scope = {
          template: '@template',
          position: '@position',
          controller: '@controller',
          index: '@index'
        };
        this.$log = Logger;
      }

      IControl.prototype.link = function(scope, element, attrs, ctrl) {
        throw new Exception("Not implemented!!");
      };

      return IControl;

    })(BaseObject);
  }
]);
