var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api.utils".ns()).factory("FitHelper".ns(), [
  "BaseObject".ns(), "Logger".ns(), "_async".ns(), function(BaseObject, $log, _async) {
    var FitHelper;
    return FitHelper = (function(_super) {
      __extends(FitHelper, _super);

      function FitHelper() {
        return FitHelper.__super__.constructor.apply(this, arguments);
      }

      FitHelper.prototype.fit = function(gMarkers, gMap) {
        var bounds, everSet;
        if (gMap && gMarkers && gMarkers.length > 0) {
          bounds = new google.maps.LatLngBounds();
          everSet = false;
          return _async.each(gMarkers, (function(_this) {
            return function(gMarker) {
              if (gMarker) {
                if (!everSet) {
                  everSet = true;
                }
                return bounds.extend(gMarker.getPosition());
              }
            };
          })(this)).then(function() {
            if (everSet) {
              return gMap.fitBounds(bounds);
            }
          });
        }
      };

      return FitHelper;

    })(BaseObject);
  }
]);
