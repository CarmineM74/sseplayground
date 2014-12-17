var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapLinked", [
  "uiGmapBaseObject", function(BaseObject) {
    var Linked;
    Linked = (function(_super) {
      __extends(Linked, _super);

      function Linked(scope, element, attrs, ctrls) {
        this.scope = scope;
        this.element = element;
        this.attrs = attrs;
        this.ctrls = ctrls;
      }

      return Linked;

    })(BaseObject);
    return Linked;
  }
]);
