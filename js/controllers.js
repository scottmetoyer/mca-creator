angular.module('mca.controllers', [])

.controller('GameCtrl', function($scope) {
  var game = this;

  // Set the initial intro page
  $scope.currentPage = 'intro';

  $scope.goto = function(page) {
    $scope.currentPage = page;
  }
});
