angular.module("google-maps.directives.api.utils".ns()).service("GmapUtil".ns(), [
  "Logger".ns(), "$compile", function(Logger, $compile) {
    var getCoords, getLatitude, getLongitude, validateCoords;
    getLatitude = function(value) {
      if (Array.isArray(value) && value.length === 2) {
        return value[1];
      } else if (angular.isDefined(value.type) && value.type === "Point") {
        return value.coordinates[1];
      } else {
        return value.latitude;
      }
    };
    getLongitude = function(value) {
      if (Array.isArray(value) && value.length === 2) {
        return value[0];
      } else if (angular.isDefined(value.type) && value.type === "Point") {
        return value.coordinates[0];
      } else {
        return value.longitude;
      }
    };
    getCoords = function(value) {
      if (!value) {
        return;
      }
      if (Array.isArray(value) && value.length === 2) {
        return new google.maps.LatLng(value[1], value[0]);
      } else if (angular.isDefined(value.type) && value.type === "Point") {
        return new google.maps.LatLng(value.coordinates[1], value.coordinates[0]);
      } else {
        return new google.maps.LatLng(value.latitude, value.longitude);
      }
    };
    validateCoords = function(coords) {
      if (angular.isUndefined(coords)) {
        return false;
      }
      if (_.isArray(coords)) {
        if (coords.length === 2) {
          return true;
        }
      } else if ((coords != null) && (coords != null ? coords.type : void 0)) {
        if (coords.type === "Point" && _.isArray(coords.coordinates) && coords.coordinates.length === 2) {
          return true;
        }
      }
      if (coords && angular.isDefined((coords != null ? coords.latitude : void 0) && angular.isDefined(coords != null ? coords.longitude : void 0))) {
        return true;
      }
      return false;
    };
    return {
      setCoordsFromEvent: function(prevValue, newLatLon) {
        if (!prevValue) {
          return;
        }
        if (Array.isArray(prevValue) && prevValue.length === 2) {
          prevValue[1] = newLatLon.lat();
          prevValue[0] = newLatLon.lng();
        } else if (angular.isDefined(prevValue.type) && prevValue.type === "Point") {
          prevValue.coordinates[1] = newLatLon.lat();
          prevValue.coordinates[0] = newLatLon.lng();
        } else {
          prevValue.latitude = newLatLon.lat();
          prevValue.longitude = newLatLon.lng();
        }
        return prevValue;
      },
      getLabelPositionPoint: function(anchor) {
        var xPos, yPos;
        if (anchor === void 0) {
          return void 0;
        }
        anchor = /^([-\d\.]+)\s([-\d\.]+)$/.exec(anchor);
        xPos = parseFloat(anchor[1]);
        yPos = parseFloat(anchor[2]);
        if ((xPos != null) && (yPos != null)) {
          return new google.maps.Point(xPos, yPos);
        }
      },
      createWindowOptions: function(gMarker, scope, content, defaults) {
        var options;
        if ((content != null) && (defaults != null) && ($compile != null)) {
          options = angular.extend({}, defaults, {
            content: this.buildContent(scope, defaults, content),
            position: defaults.position != null ? defaults.position : angular.isObject(gMarker) ? gMarker.getPosition() : getCoords(scope.coords)
          });
          if ((gMarker != null) && ((options != null ? options.pixelOffset : void 0) == null)) {
            if (options.boxClass == null) {

            } else {
              options.pixelOffset = {
                height: 0,
                width: -2
              };
            }
          }
          return options;
        } else {
          if (!defaults) {
            Logger.error("infoWindow defaults not defined");
            if (!content) {
              return Logger.error("infoWindow content not defined");
            }
          } else {
            return defaults;
          }
        }
      },
      buildContent: function(scope, defaults, content) {
        var parsed, ret;
        if (defaults.content != null) {
          ret = defaults.content;
        } else {
          if ($compile != null) {
            content = content.replace(/^\s+|\s+$/g, "");
            parsed = content === '' ? '' : $compile(content)(scope);
            if (parsed.length > 0) {
              ret = parsed[0];
            }
          } else {
            ret = content;
          }
        }
        return ret;
      },
      defaultDelay: 50,
      isTrue: function(val) {
        return angular.isDefined(val) && val !== null && val === true || val === "1" || val === "y" || val === "true";
      },
      isFalse: function(value) {
        return ['false', 'FALSE', 0, 'n', 'N', 'no', 'NO'].indexOf(value) !== -1;
      },
      getCoords: getCoords,
      validateCoords: validateCoords,
      equalCoords: function(coord1, coord2) {
        return getLatitude(coord1) === getLatitude(coord2) && getLongitude(coord1) === getLongitude(coord2);
      },
      validatePath: function(path) {
        var array, i, polygon, trackMaxVertices;
        i = 0;
        if (angular.isUndefined(path.type)) {
          if (!Array.isArray(path) || path.length < 2) {
            return false;
          }
          while (i < path.length) {
            if (!((angular.isDefined(path[i].latitude) && angular.isDefined(path[i].longitude)) || (typeof path[i].lat === "function" && typeof path[i].lng === "function"))) {
              return false;
            }
            i++;
          }
          return true;
        } else {
          if (angular.isUndefined(path.coordinates)) {
            return false;
          }
          if (path.type === "Polygon") {
            if (path.coordinates[0].length < 4) {
              return false;
            }
            array = path.coordinates[0];
          } else if (path.type === "MultiPolygon") {
            trackMaxVertices = {
              max: 0,
              index: 0
            };
            _.forEach(path.coordinates, function(polygon, index) {
              if (polygon[0].length > this.max) {
                this.max = polygon[0].length;
                return this.index = index;
              }
            }, trackMaxVertices);
            polygon = path.coordinates[trackMaxVertices.index];
            array = polygon[0];
            if (array.length < 4) {
              return false;
            }
          } else if (path.type === "LineString") {
            if (path.coordinates.length < 2) {
              return false;
            }
            array = path.coordinates;
          } else {
            return false;
          }
          while (i < array.length) {
            if (array[i].length !== 2) {
              return false;
            }
            i++;
          }
          return true;
        }
      },
      convertPathPoints: function(path) {
        var array, i, latlng, result, trackMaxVertices;
        i = 0;
        result = new google.maps.MVCArray();
        if (angular.isUndefined(path.type)) {
          while (i < path.length) {
            latlng;
            if (angular.isDefined(path[i].latitude) && angular.isDefined(path[i].longitude)) {
              latlng = new google.maps.LatLng(path[i].latitude, path[i].longitude);
            } else if (typeof path[i].lat === "function" && typeof path[i].lng === "function") {
              latlng = path[i];
            }
            result.push(latlng);
            i++;
          }
        } else {
          array;
          if (path.type === "Polygon") {
            array = path.coordinates[0];
          } else if (path.type === "MultiPolygon") {
            trackMaxVertices = {
              max: 0,
              index: 0
            };
            _.forEach(path.coordinates, function(polygon, index) {
              if (polygon[0].length > this.max) {
                this.max = polygon[0].length;
                return this.index = index;
              }
            }, trackMaxVertices);
            array = path.coordinates[trackMaxVertices.index][0];
          } else if (path.type === "LineString") {
            array = path.coordinates;
          }
          while (i < array.length) {
            result.push(new google.maps.LatLng(array[i][1], array[i][0]));
            i++;
          }
        }
        return result;
      },
      extendMapBounds: function(map, points) {
        var bounds, i;
        bounds = new google.maps.LatLngBounds();
        i = 0;
        while (i < points.length) {
          bounds.extend(points.getAt(i));
          i++;
        }
        return map.fitBounds(bounds);
      },
      getPath: function(object, key) {
        var obj;
        obj = object;
        _.each(key.split("."), function(value) {
          if (obj) {
            return obj = obj[value];
          }
        });
        return obj;
      },
      validateBoundPoints: function(bounds) {
        if (angular.isUndefined(bounds.sw.latitude) || angular.isUndefined(bounds.sw.longitude) || angular.isUndefined(bounds.ne.latitude) || angular.isUndefined(bounds.ne.longitude)) {
          return false;
        }
        return true;
      },
      convertBoundPoints: function(bounds) {
        var result;
        result = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.sw.latitude, bounds.sw.longitude), new google.maps.LatLng(bounds.ne.latitude, bounds.ne.longitude));
        return result;
      },
      fitMapBounds: function(map, bounds) {
        return map.fitBounds(bounds);
      }
    };
  }
]);
