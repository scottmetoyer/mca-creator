angular.module('mca.controllers', ['mca.services'])

.controller('GameCtrl', function($scope) {
  var game = this;
  $scope.currentPage = 'intro';
});
