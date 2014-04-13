angular.module('Slider').directive('slide', function() {
  return {
    replace: true,
    scope: {},
    link: function(scope, element, attrs) {
      element.addClass('slide');
    }
  }
});
