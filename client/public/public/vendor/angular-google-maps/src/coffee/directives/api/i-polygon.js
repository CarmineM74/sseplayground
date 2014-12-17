var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api').factory('uiGmapIPolygon', [
  'uiGmapGmapUtil', 'uiGmapBaseObject', 'uiGmapLogger', 'uiGmapCtrlHandle', function(GmapUtil, BaseObject, Logger, CtrlHandle) {
    var IPolygon;
    return IPolygon = (function(_super) {
      __extends(IPolygon, _super);

      IPolygon.include(GmapUtil);

      IPolygon.extend(CtrlHandle);

      function IPolygon() {}

      IPolygon.prototype.restrict = 'EMA';

      IPolygon.prototype.replace = true;

      IPolygon.prototype.require = '^' + 'uiGmapGoogleMap';

      IPolygon.prototype.scope = {
        path: '=path',
        stroke: '=stroke',
        clickable: '=',
        draggable: '=',
        editable: '=',
        geodesic: '=',
        fill: '=',
        icons: '=icons',
        visible: '=',
        "static": '=',
        events: '=',
        zIndex: '=zindex',
        fit: '=',
        control: '=control'
      };

      IPolygon.prototype.DEFAULTS = {};

      IPolygon.prototype.$log = Logger;

      return IPolygon;

    })(BaseObject);
  }
]);
