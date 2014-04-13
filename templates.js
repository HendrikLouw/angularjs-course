angular.module('Slider').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('lib/code/code.html',
    "<div class=\"code-runner\">\n" +
    "  <div ng-model=\"codeData\" ui-ace=\"{   useWrapMode : true,\n" +
    "                   showGutter: true,\n" +
    "                   theme:'solarized_dark',\n" +
    "                   mode: 'javascript',\n" +
    "                   onLoad: aceLoaded,\n" +
    "                   onChange: aceChanged\n" +
    "              }\"><span ng-transclude></span>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>\n"
  );

}]);
