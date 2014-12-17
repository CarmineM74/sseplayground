beforeEach(function() {
  return this.googleTemp = window.google;
});

afterEach(function() {
  return window.google = this.googleTemp;
});
