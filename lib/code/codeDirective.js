angular.module('Slider').directive('code', function() {
  return {
    transclude: true,
    replace: true,
    scope: {
      codeData: '@'
    },
    controller: function($scope, $element) {
    },
    templateUrl: 'lib/code/code.html',
  }
});
