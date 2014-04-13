describe("RuntimeService", function() {
  beforeEach(module('Slider'));

  beforeEach(inject(function(RuntimeService) {
    this.runtime = RuntimeService;
  }));

  it('should have a runtime service', function() {
    expect(this.runtime).toBeDefined();
  });

  describe("on initialization", function() {
    it('should have a head section', function() {
      expect(this.runtime.head()).toEqual("<head></head>");
    });

    it("should have a body section", function() {
      expect(this.runtime.body()).toEqual("<body></body>");
    });

    it("should have an HTML output", function() {
        expect(this.runtime.toHTML()).toEqual("<!DOCTYPE html><html><head></head><body></body></html>");
    });
  });

  describe("with angularJS support", function() {
    it("should add the angularJS library", function() {
      this.runtime.addLibrary('angular');
      expect(this.runtime.body()).toEqual('<body><script src="bower_components/angular/angular.js" type="text/javascript"></script></body>');
    });
  });

  describe("adding a javacscript", function() {
    it("should add javascript in the body tag", function() {
      this.runtime.addJavascript('console.log("hello world")');
      expect(this.runtime.body()).toEqual('<body><script type="text/javascript">console.log("hello world")</script></body>');
    });
  });
});
