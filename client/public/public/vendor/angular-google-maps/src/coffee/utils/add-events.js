angular.module("google-maps".ns()).factory("add-events".ns(), [
  "$timeout", function($timeout) {
    var addEvent, addEvents;
    addEvent = function(target, eventName, handler) {
      return google.maps.event.addListener(target, eventName, function() {
        handler.apply(this, arguments);
        return $timeout((function() {}), true);
      });
    };
    addEvents = function(target, eventName, handler) {
      var remove;
      if (handler) {
        return addEvent(target, eventName, handler);
      }
      remove = [];
      angular.forEach(eventName, function(_handler, key) {
        return remove.push(addEvent(target, key, _handler));
      });
      return function() {
        angular.forEach(remove, function(listener) {
          return google.maps.event.removeListener(listener);
        });
        return remove = null;
      };
    };
    return addEvents;
  }
]);
