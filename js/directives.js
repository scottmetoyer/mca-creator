angular.module('mca.directives', [])

.directive('mcaChoice', function() {
  return {
    scope: {
      choice: '&',
      text: '@text'
    },
    restrict: 'E',
    template: '<p class="choice">{{ text }}</p>',
    link: function(scope, elm, attrs) { }
  };
});
