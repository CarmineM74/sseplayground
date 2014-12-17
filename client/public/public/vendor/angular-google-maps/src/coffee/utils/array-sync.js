angular.module("google-maps".ns()).factory("array-sync".ns(), [
  "add-events".ns(), function(mapEvents) {
    return function(mapArray, scope, pathEval, pathChangedFn) {
      var geojsonArray, geojsonHandlers, geojsonWatcher, isSetFromScope, legacyHandlers, legacyWatcher, mapArrayListener, scopePath, watchListener;
      isSetFromScope = false;
      scopePath = scope.$eval(pathEval);
      if (!scope["static"]) {
        legacyHandlers = {
          set_at: function(index) {
            var value;
            if (isSetFromScope) {
              return;
            }
            value = mapArray.getAt(index);
            if (!value) {
              return;
            }
            if (!value.lng || !value.lat) {
              return scopePath[index] = value;
            } else {
              scopePath[index].latitude = value.lat();
              return scopePath[index].longitude = value.lng();
            }
          },
          insert_at: function(index) {
            var value;
            if (isSetFromScope) {
              return;
            }
            value = mapArray.getAt(index);
            if (!value) {
              return;
            }
            if (!value.lng || !value.lat) {
              return scopePath.splice(index, 0, value);
            } else {
              return scopePath.splice(index, 0, {
                latitude: value.lat(),
                longitude: value.lng()
              });
            }
          },
          remove_at: function(index) {
            if (isSetFromScope) {
              return;
            }
            return scopePath.splice(index, 1);
          }
        };
        geojsonArray;
        if (scopePath.type === "Polygon") {
          geojsonArray = scopePath.coordinates[0];
        } else if (scopePath.type === "LineString") {
          geojsonArray = scopePath.coordinates;
        }
        geojsonHandlers = {
          set_at: function(index) {
            var value;
            if (isSetFromScope) {
              return;
            }
            value = mapArray.getAt(index);
            if (!value) {
              return;
            }
            if (!value.lng || !value.lat) {
              return;
            }
            geojsonArray[index][1] = value.lat();
            return geojsonArray[index][0] = value.lng();
          },
          insert_at: function(index) {
            var value;
            if (isSetFromScope) {
              return;
            }
            value = mapArray.getAt(index);
            if (!value) {
              return;
            }
            if (!value.lng || !value.lat) {
              return;
            }
            return geojsonArray.splice(index, 0, [value.lng(), value.lat()]);
          },
          remove_at: function(index) {
            if (isSetFromScope) {
              return;
            }
            return geojsonArray.splice(index, 1);
          }
        };
        mapArrayListener = mapEvents(mapArray, angular.isUndefined(scopePath.type) ? legacyHandlers : geojsonHandlers);
      }
      legacyWatcher = function(newPath) {
        var changed, i, l, newLength, newValue, oldArray, oldLength, oldValue;
        isSetFromScope = true;
        oldArray = mapArray;
        changed = false;
        if (newPath) {
          i = 0;
          oldLength = oldArray.getLength();
          newLength = newPath.length;
          l = Math.min(oldLength, newLength);
          newValue = void 0;
          while (i < l) {
            oldValue = oldArray.getAt(i);
            newValue = newPath[i];
            if (typeof newValue.equals === "function") {
              if (!newValue.equals(oldValue)) {
                oldArray.setAt(i, newValue);
                changed = true;
              }
            } else {
              if ((oldValue.lat() !== newValue.latitude) || (oldValue.lng() !== newValue.longitude)) {
                oldArray.setAt(i, new google.maps.LatLng(newValue.latitude, newValue.longitude));
                changed = true;
              }
            }
            i++;
          }
          while (i < newLength) {
            newValue = newPath[i];
            if (typeof newValue.lat === "function" && typeof newValue.lng === "function") {
              oldArray.push(newValue);
            } else {
              oldArray.push(new google.maps.LatLng(newValue.latitude, newValue.longitude));
            }
            changed = true;
            i++;
          }
          while (i < oldLength) {
            oldArray.pop();
            changed = true;
            i++;
          }
        }
        isSetFromScope = false;
        if (changed) {
          return pathChangedFn(oldArray);
        }
      };
      geojsonWatcher = function(newPath) {
        var array, changed, i, l, newLength, newValue, oldArray, oldLength, oldValue;
        isSetFromScope = true;
        oldArray = mapArray;
        changed = false;
        if (newPath) {
          array;
          if (scopePath.type === "Polygon") {
            array = newPath.coordinates[0];
          } else if (scopePath.type === "LineString") {
            array = newPath.coordinates;
          }
          i = 0;
          oldLength = oldArray.getLength();
          newLength = array.length;
          l = Math.min(oldLength, newLength);
          newValue = void 0;
          while (i < l) {
            oldValue = oldArray.getAt(i);
            newValue = array[i];
            if ((oldValue.lat() !== newValue[1]) || (oldValue.lng() !== newValue[0])) {
              oldArray.setAt(i, new google.maps.LatLng(newValue[1], newValue[0]));
              changed = true;
            }
            i++;
          }
          while (i < newLength) {
            newValue = array[i];
            oldArray.push(new google.maps.LatLng(newValue[1], newValue[0]));
            changed = true;
            i++;
          }
          while (i < oldLength) {
            oldArray.pop();
            changed = true;
            i++;
          }
        }
        isSetFromScope = false;
        if (changed) {
          return pathChangedFn(oldArray);
        }
      };
      watchListener;
      if (!scope["static"]) {
        if (angular.isUndefined(scopePath.type)) {
          watchListener = scope.$watchCollection(pathEval, legacyWatcher);
        } else {
          watchListener = scope.$watch(pathEval, geojsonWatcher, true);
        }
      }
      return function() {
        if (mapArrayListener) {
          mapArrayListener();
          mapArrayListener = null;
        }
        if (watchListener) {
          watchListener();
          return watchListener = null;
        }
      };
    };
  }
]);
