(function() {
  var module;
  return module = angular.module("angular-google-maps-specs", ['google-maps'.ns()]).controller('GoogleMapSpecController', function($scope, $timeout, $log) {
    var self;
    self = this;
    this.hasRun = false;
    this.map = {};
    google.maps.visualRefresh = true;
    return angular.extend($scope, {
      showTraffic: true,
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 3,
      events: {
        tilesloaded: function(map, eventName, originalEventArgs) {
          if (!self.hasRun) {
            self.map = map;
            document.gMap = map;
            return self.hasRun = true;
          }
        }
      }
    });
  });
})();
