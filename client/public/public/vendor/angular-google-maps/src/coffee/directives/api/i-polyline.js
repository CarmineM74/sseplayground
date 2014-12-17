var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api').factory('uiGmapIPolyline', [
  'uiGmapGmapUtil', 'uiGmapBaseObject', 'uiGmapLogger', 'uiGmapCtrlHandle', function(GmapUtil, BaseObject, Logger, CtrlHandle) {
    var IPolyline;
    return IPolyline = (function(_super) {
      __extends(IPolyline, _super);

      IPolyline.include(GmapUtil);

      IPolyline.extend(CtrlHandle);

      function IPolyline() {}

      IPolyline.prototype.restrict = 'EMA';

      IPolyline.prototype.replace = true;

      IPolyline.prototype.require = '^' + 'uiGmapGoogleMap';

      IPolyline.prototype.scope = {
        path: '=',
        stroke: '=',
        clickable: '=',
        draggable: '=',
        editable: '=',
        geodesic: '=',
        icons: '=',
        visible: '=',
        "static": '=',
        fit: '=',
        events: '='
      };

      IPolyline.prototype.DEFAULTS = {};

      IPolyline.prototype.$log = Logger;

      return IPolyline;

    })(BaseObject);
  }
]);
