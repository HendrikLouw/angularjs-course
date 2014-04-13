angular.module('Slider').factory('RuntimeService', function() {

  var addedLibraries = [];
  var javascripts = [];

  var head = function() {
    var head = "<head>";
    head += "</head>"
    return head;
  };

  var body = function() {
    var body = "<body>";
    body += librariesToHTML();
    body += javascriptsToHTML();
    body += "</body>";
    return body;
  };

  var toHTML = function() {
    return "<!DOCTYPE html>" +
      "<html>" +
      head() +
      body() +
      "</html>";
  };

  var addLibrary = function(libraryName) {
    addedLibraries.push("bower_components/angular/angular.js");
  };

  var addJavascript = function(script) {
    javascripts.push(script);
  };

  var javascriptsToHTML = function() {
    var javascriptsHTML = '';
    angular.forEach(javascripts, function(script) {
      javascriptsHTML = '<script type="text/javascript">' + script + '</script>';
    });
    return javascriptsHTML;
  };

  var librariesToHTML = function() {
    var librariesHTML = '';
    angular.forEach(addedLibraries, function(value) {
      librariesHTML += '<script src="' + value + '" type="text/javascript"></script>';
    });
    return librariesHTML;
  };

  return {
    head: head,
    body: body,
    toHTML: toHTML,
    addLibrary: addLibrary,
    addJavascript: addJavascript
  }
});
