var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module("google-maps.directives.api.utils".ns()).factory("BaseObject".ns(), function() {
  var BaseObject, baseObjectKeywords;
  baseObjectKeywords = ['extended', 'included'];
  BaseObject = (function() {
    function BaseObject() {}

    BaseObject.extend = function(obj) {
      var key, value, _ref;
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(baseObjectKeywords, key) < 0) {
          this[key] = value;
        }
      }
      if ((_ref = obj.extended) != null) {
        _ref.apply(this);
      }
      return this;
    };

    BaseObject.include = function(obj) {
      var key, value, _ref;
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(baseObjectKeywords, key) < 0) {
          this.prototype[key] = value;
        }
      }
      if ((_ref = obj.included) != null) {
        _ref.apply(this);
      }
      return this;
    };

    return BaseObject;

  })();
  return BaseObject;
});
