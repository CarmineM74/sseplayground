
/*
    Author Nick McCready
    Intersection of Objects if the arrays have something in common each intersecting object will be returned
    in an new array.
 */
_.intersectionObjects = function(array1, array2, comparison) {
  var res;
  if (comparison == null) {
    comparison = void 0;
  }
  res = _.map(array1, (function(_this) {
    return function(obj1) {
      return _.find(array2, function(obj2) {
        if (comparison != null) {
          return comparison(obj1, obj2);
        } else {
          return _.isEqual(obj1, obj2);
        }
      });
    };
  })(this));
  return _.filter(res, function(o) {
    return o != null;
  });
};

_.containsObject = _.includeObject = function(obj, target, comparison) {
  if (comparison == null) {
    comparison = void 0;
  }
  if (obj === null) {
    return false;
  }
  return _.any(obj, (function(_this) {
    return function(value) {
      if (comparison != null) {
        return comparison(value, target);
      } else {
        return _.isEqual(value, target);
      }
    };
  })(this));
};

_.differenceObjects = function(array1, array2, comparison) {
  if (comparison == null) {
    comparison = void 0;
  }
  return _.filter(array1, function(value) {
    return !_.containsObject(array2, value, comparison);
  });
};

_.withoutObjects = _.differenceObjects;

_.indexOfObject = function(array, item, comparison, isSorted) {
  var i, length;
  if (array == null) {
    return -1;
  }
  i = 0;
  length = array.length;
  if (isSorted) {
    if (typeof isSorted === "number") {
      i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
    } else {
      i = _.sortedIndex(array, item);
      return (array[i] === item ? i : -1);
    }
  }
  while (i < length) {
    if (comparison != null) {
      if (comparison(array[i], item)) {
        return i;
      }
    } else {
      if (_.isEqual(array[i], item)) {
        return i;
      }
    }
    i++;
  }
  return -1;
};

_["extends"] = function(arrayOfObjectsToCombine) {
  return _.reduce(arrayOfObjectsToCombine, function(combined, toAdd) {
    return _.extend(combined, toAdd);
  }, {});
};

_.isNullOrUndefined = function(thing) {
  return _.isNull(thing || _.isUndefined(thing));
};
