angular.module("google-maps".ns()).controller("PolylineDisplayController".ns(), [
  "$scope", function($scope) {
    return $scope.toggleStrokeColor = function() {
      return $scope.stroke.color = ($scope.stroke.color === "#6060FB" ? "red" : "#6060FB");
    };
  }
]);
