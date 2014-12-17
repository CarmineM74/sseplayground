angular.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapEventsHelper", [
  "uiGmapLogger", function($log) {
    return {
      setEvents: function(gObject, scope, model, ignores) {
        if (angular.isDefined(scope.events) && (scope.events != null) && angular.isObject(scope.events)) {
          return _.compact(_.map(scope.events, function(eventHandler, eventName) {
            var doIgnore;
            if (ignores) {
              doIgnore = _(ignores).contains(eventName);
            }
            if (scope.events.hasOwnProperty(eventName) && angular.isFunction(scope.events[eventName]) && !doIgnore) {
              return google.maps.event.addListener(gObject, eventName, function() {
                if (!scope.$evalAsync) {
                  scope.$evalAsync = function() {};
                }
                return scope.$evalAsync(eventHandler.apply(scope, [gObject, eventName, model, arguments]));
              });
            }
          }));
        }
      },
      removeEvents: function(listeners) {
        if (!listeners) {
          return;
        }
        return listeners.forEach(function(l) {
          if (l) {
            return google.maps.event.removeListener(l);
          }
        });
      }
    };
  }
]);
