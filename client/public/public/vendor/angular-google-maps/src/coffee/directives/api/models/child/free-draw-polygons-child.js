
/*
angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicholas McCready - https://twitter.com/nmccready
Original idea from: http://stackoverflow.com/questions/22758950/google-map-drawing-freehand  , &
  http://jsfiddle.net/YsQdh/88/
 */
angular.module('uiGmapgoogle-maps.directives.api.models.child').factory('uiGmapDrawFreeHandChildModel', [
  'uiGmapLogger', '$q', function($log, $q) {
    var drawFreeHand, freeHandMgr;
    drawFreeHand = function(map, polys, enable) {
      var move, poly;
      this.polys = polys;
      poly = new google.maps.Polyline({
        map: map,
        clickable: false
      });
      move = google.maps.event.addListener(map, 'mousemove', function(e) {
        return poly.getPath().push(e.latLng);
      });
      google.maps.event.addListenerOnce(map, 'mouseup', function(e) {
        var path;
        google.maps.event.removeListener(move);
        path = poly.getPath();
        poly.setMap(null);
        polys.push(new google.maps.Polygon({
          map: map,
          path: path
        }));
        poly = null;
        google.maps.event.clearListeners(map.getDiv(), 'mousedown');
        return enable();
      });
      return void 0;
    };
    freeHandMgr = function(map) {
      var disableMap, enable;
      this.map = map;
      enable = (function(_this) {
        return function() {
          var _ref;
          if ((_ref = _this.deferred) != null) {
            _ref.resolve();
          }
          return _this.map.setOptions(_this.oldOptions);
        };
      })(this);
      disableMap = (function(_this) {
        return function() {
          $log.info('disabling map move');
          _this.oldOptions = map.getOptions();
          return _this.map.setOptions({
            draggable: false,
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: false
          });
        };
      })(this);
      this.engage = (function(_this) {
        return function(polys) {
          _this.polys = polys;
          _this.deferred = $q.defer();
          disableMap();
          $log.info('DrawFreeHandChildModel is engaged (drawing).');
          google.maps.event.addDomListener(_this.map.getDiv(), 'mousedown', function(e) {
            return drawFreeHand(_this.map, _this.polys, enable);
          });
          return _this.deferred.promise;
        };
      })(this);
      return this;
    };
    return freeHandMgr;
  }
]);
