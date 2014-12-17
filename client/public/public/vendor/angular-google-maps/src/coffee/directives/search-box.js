
/*
@authors:
- Nicolas Laplante https://plus.google.com/108189012221374960701
- Nicholas McCready - https://twitter.com/nmccready
- Carrie Kengle - http://about.me/carrie
 */

/*
Places Search Box directive

This directive is used to create a Places Search Box.
This directive creates a new scope.

{attribute input required}  HTMLInputElement
{attribute options optional} The options that can be set on a SearchBox object (google.maps.places.SearchBoxOptions object specification)
 */
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

angular.module("google-maps".ns()).directive("SearchBox".ns(), [
  "GoogleMapApi".ns(), "Logger".ns(), "SearchBoxParentModel".ns(), '$http', '$templateCache', '$compile', function(GoogleMapApi, Logger, SearchBoxParentModel, $http, $templateCache, $compile) {
    var SearchBox;
    SearchBox = (function() {
      function SearchBox() {
        this.link = __bind(this.link, this);
        this.$log = Logger;
        this.restrict = "EMA";
        this.require = '^' + 'GoogleMap'.ns();
        this.priority = -1;
        this.transclude = true;
        this.template = '<span class=\"angular-google-map-search\" ng-transclude></span>';
        this.replace = true;
        this.scope = {
          template: '=template',
          position: '=position',
          options: '=options',
          events: '=events',
          parentdiv: '=parentdiv'
        };
      }

      SearchBox.prototype.link = function(scope, element, attrs, mapCtrl) {
        return GoogleMapApi.then((function(_this) {
          return function(maps) {
            return $http.get(scope.template, {
              cache: $templateCache
            }).success(function(template) {
              return mapCtrl.getScope().deferred.promise.then(function(map) {
                var ctrlPosition;
                ctrlPosition = angular.isDefined(scope.position) ? scope.position.toUpperCase().replace(/-/g, '_') : 'TOP_LEFT';
                if (!maps.ControlPosition[ctrlPosition]) {
                  _this.$log.error('searchBox: invalid position property');
                  return;
                }
                return new SearchBoxParentModel(scope, element, attrs, map, ctrlPosition, $compile(template)(scope));
              });
            });
          };
        })(this));
      };

      return SearchBox;

    })();
    return new SearchBox();
  }
]);
