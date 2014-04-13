describe("code directive", function() {
  beforeEach(module('Slider'));

  beforeEach(inject(function($compile, $rootScope, $httpBackend) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.markup = angular.element("<div code>some code</div>");
    this.compile(this.markup)(this.scope);
    this.scope.$digest();
  }));

  it("should initialize ui.ace", function() {
    expect(this.markup.children().hasClass('ace_editor')).toBeTruthy();
  });

});
