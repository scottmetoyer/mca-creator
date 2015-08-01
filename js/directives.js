angular.module('mca.directives', [])

.directive('mcaChoice', function() {
  return {
    scope: {
      text: '@',
      action: '&'
    },
    restrict: 'E',
    template: '<p class="choice" ng-click="action()">{{ text }}</p>'
  };
});
