angular.module("Slider").directive('runtime', function() {
  return {
    replace: true,
    scope: {},
    template: "<iframe id='runtime' width='100%'></iframe>",

    link: function(scope, element, attributes) {
      var $body = angular.element(element).contents().find('body');
      $body.append();
    }
  }
});
