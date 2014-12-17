angular.module('uiGmapgoogle-maps.directives.api.options').service('uiGmapMarkerOptions', [
  'uiGmapLogger', 'uiGmapGmapUtil', function($log, GmapUtil) {
    return _.extend(GmapUtil, {
      createOptions: function(coords, icon, defaults, map) {
        var opts;
        if (defaults == null) {
          defaults = {};
        }
        opts = angular.extend({}, defaults, {
          position: defaults.position != null ? defaults.position : GmapUtil.getCoords(coords),
          visible: defaults.visible != null ? defaults.visible : GmapUtil.validateCoords(coords)
        });
        if ((defaults.icon != null) || (icon != null)) {
          opts = angular.extend(opts, {
            icon: defaults.icon != null ? defaults.icon : icon
          });
        }
        if (map != null) {
          opts.map = map;
        }
        return opts;
      },
      isLabel: function(options) {
        if ((options.labelContent != null) || (options.labelAnchor != null) || (options.labelClass != null) || (options.labelStyle != null) || (options.labelVisible != null)) {
          return true;
        } else {
          return false;
        }
      }
    });
  }
]);
