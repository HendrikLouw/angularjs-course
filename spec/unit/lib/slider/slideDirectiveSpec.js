describe("slide Directive", function() {

  beforeEach(module('Slider'));

  beforeEach(inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it("should have a slide class", function() {
      var markup = angular.element("<div slide></div>");
      this.compile(markup)(this.scope);
      expect(markup.hasClass('slide')).toBeTruthy();
  });
});
