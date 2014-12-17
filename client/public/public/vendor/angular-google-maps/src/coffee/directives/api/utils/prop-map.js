
/*
    Simple Object Map with a lenght property to make it easy to track length/size
 */
var propsToPop,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

propsToPop = ['get', 'put', 'remove', 'values', 'keys', 'length', 'push', 'didValueStateChange', 'didKeyStateChange', 'slice', 'removeAll', 'allVals', 'allKeys', 'stateChanged'];

window.PropMap = (function() {
  function PropMap() {
    this.removeAll = __bind(this.removeAll, this);
    this.slice = __bind(this.slice, this);
    this.push = __bind(this.push, this);
    this.keys = __bind(this.keys, this);
    this.values = __bind(this.values, this);
    this.remove = __bind(this.remove, this);
    this.put = __bind(this.put, this);
    this.stateChanged = __bind(this.stateChanged, this);
    this.get = __bind(this.get, this);
    this.length = 0;
    this.didValueStateChange = false;
    this.didKeyStateChange = false;
    this.allVals = [];
    this.allKeys = [];
  }

  PropMap.prototype.get = function(key) {
    return this[key];
  };

  PropMap.prototype.stateChanged = function() {
    this.didValueStateChange = true;
    return this.didKeyStateChange = true;
  };

  PropMap.prototype.put = function(key, value) {
    if (this.get(key) == null) {
      this.length++;
    }
    this.stateChanged();
    return this[key] = value;
  };

  PropMap.prototype.remove = function(key, isSafe) {
    var value;
    if (isSafe == null) {
      isSafe = false;
    }
    if (isSafe && !this.get(key)) {
      return void 0;
    }
    value = this[key];
    delete this[key];
    this.length--;
    this.stateChanged();
    return value;
  };

  PropMap.prototype.values = function() {
    var all;
    if (!this.didValueStateChange) {
      return this.allVals;
    }
    all = [];
    this.keys().forEach((function(_this) {
      return function(key) {
        if (_.indexOf(propsToPop, key) === -1) {
          return all.push(_this[key]);
        }
      };
    })(this));
    all;
    this.didValueStateChange = false;
    this.keys();
    return this.allVals = all;
  };

  PropMap.prototype.keys = function() {
    var all, keys;
    if (!this.didKeyStateChange) {
      return this.allKeys;
    }
    keys = _.keys(this);
    all = [];
    _.each(keys, (function(_this) {
      return function(prop) {
        if (_.indexOf(propsToPop, prop) === -1) {
          return all.push(prop);
        }
      };
    })(this));
    this.didKeyStateChange = false;
    this.values();
    return this.allKeys = all;
  };

  PropMap.prototype.push = function(obj, key) {
    if (key == null) {
      key = "key";
    }
    return this.put(obj[key], obj);
  };

  PropMap.prototype.slice = function() {
    return this.keys().map((function(_this) {
      return function(k) {
        return _this.remove(k);
      };
    })(this));
  };

  PropMap.prototype.removeAll = function() {
    return this.slice();
  };

  return PropMap;

})();

angular.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapPropMap", function() {
  return window.PropMap;
});
