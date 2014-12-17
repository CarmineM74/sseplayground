String.prototype.contains = function(value, fromIndex) {
  return this.indexOf(value, fromIndex) !== -1;
};

String.prototype.flare = function(flare) {
  if (flare == null) {
    flare = 'uiGmap';
  }
  return flare + this;
};

String.prototype.ns = String.prototype.flare;
