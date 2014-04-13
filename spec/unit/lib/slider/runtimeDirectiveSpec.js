describe("runtime directive", function() {
  beforeEach(module('Slider'));

  beforeEach(inject(function($compile, $rootScope, $httpBackend) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.markup = angular.element("<div runtime></div>");
    this.compile(this.markup)(this.scope);
    this.scope.$digest();
  }));

  it("should add angularJS to the runtime", function() {
    expect(this.markup[0].tagName).toBe("IFRAME");
  });

});
