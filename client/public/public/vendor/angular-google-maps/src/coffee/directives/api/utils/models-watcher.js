angular.module("google-maps.directives.api.utils".ns()).factory("ModelsWatcher".ns(), [
  "Logger".ns(), "_async".ns(), function(Logger, _async) {
    return {
      figureOutState: function(idKey, scope, childObjects, comparison, callBack) {
        var adds, mappedScopeModelIds, removals, updates;
        adds = [];
        mappedScopeModelIds = {};
        removals = [];
        updates = [];
        return _async.each(scope.models, function(m) {
          var child;
          if (m[idKey] != null) {
            mappedScopeModelIds[m[idKey]] = {};
            if (childObjects[m[idKey]] == null) {
              return adds.push(m);
            } else {
              child = childObjects[m[idKey]];
              if (!comparison(m, child.model)) {
                return updates.push({
                  model: m,
                  child: child
                });
              }
            }
          } else {
            return Logger.error(" id missing for model " + (m.toString()) + ",\ncan not use do comparison/insertion");
          }
        }).then((function(_this) {
          return function() {
            return _async.each(childObjects.values(), function(c) {
              var id;
              if (c == null) {
                Logger.error("child undefined in ModelsWatcher.");
                return;
              }
              if (c.model == null) {
                Logger.error("child.model undefined in ModelsWatcher.");
                return;
              }
              id = c.model[idKey];
              if (mappedScopeModelIds[id] == null) {
                return removals.push(c);
              }
            });
          };
        })(this)).then((function(_this) {
          return function() {
            return callBack({
              adds: adds,
              removals: removals,
              updates: updates
            });
          };
        })(this));
      }
    };
  }
]);
