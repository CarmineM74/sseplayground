angular.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapPropertyAction", [
  "uiGmapLogger", function(Logger) {
    var PropertyAction;
    PropertyAction = function(setterFn, isFirstSet, key) {
      var self;
      self = this;
      this.setIfChange = function(newVal, oldVal) {
        var callingKey;
        callingKey = this.exp;
        if (!_.isEqual(oldVal, newVal)) {
          return setterFn(callingKey, newVal);
        }
      };
      this.sic = this.setIfChange;
      return this;
    };
    return PropertyAction;
  }
]);
