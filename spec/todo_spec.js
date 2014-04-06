describe("TodoMVC App", function() {
  beforeEach(module('Todo'));

  describe("Todo controller", function() {
    beforeEach(inject(function($rootScope, $controller, Todos) {
      this.todos = [
        {
          completed: false,
          label: "Find nemo"
        },
        {
          completed: true,
          label: "Learn jasmine"
        }
      ];

      Todos.add(this.todos[0]);
      Todos.add(this.todos[1]);

      this.scope = $rootScope.$new();

      $controller('TodoCtrl', {
        $scope: this.scope,
        Todos: Todos
      });

      this.scope.todos = this.todos;

    }));

    describe("on initialization", function() {

      it("should have an empty new todo", function() {
        expect(this.scope.newTodo).toEqual('');
      });

      it("should have a default list of todos", function() {
        expect(this.scope.todos).toEqual(this.todos);
      });

      it("should have an empty filter query", function() {
        expect(this.scope.filterQuery).toEqual('');
      });

      it("should count the remaining todos", function() {
        this.scope.$apply();
        expect(this.scope.remainingtodos.length).toEqual(1);
      });

      it("should count the completed todos", function() {
        this.scope.$apply();
        expect(this.scope.completedtodos.length).toEqual(1);
      });

    });

    describe("when adding a todo", function() {
      it("should not add an empty todo", function() {
        this.scope.newTodo = '';
        this.scope.addTodo();
        this.scope.$apply();
        expect(this.scope.todos.length).toBe(2);
      });

      it("should add a non empty todo", function() {
        this.scope.newTodo = 'New todo';
        this.scope.addTodo();
        this.scope.$apply();
        expect(this.scope.todos.length).toEqual(3);
      });

      it("should add a non empty todo with as an active todo", function() {
        this.scope.newTodo = 'New todo';
        this.scope.addTodo();
        this.scope.$apply();

        expect(this.scope.todos[2].label).toEqual('New todo');
        expect(this.scope.todos[2].completed).toBeFalsy();
      });

      it("should reset the new todo input to be blank", function() {
        this.scope.newTodo = 'New todo';
        this.scope.addTodo();
        this.scope.$apply();
        expect(this.scope.newTodo).toEqual('');
      });

    });

    describe("when deleting a todo", function() {
      it("should remove a todo if it exists in todos list", function() {
        this.scope.removeTodo(this.todos[0]);
        this.scope.$apply();
        expect(this.scope.todos.length).toEqual(1);
      });

      it("should fail silently if todo does not exist in todos list", function() {
        this.scope.removeTodo();
        this.scope.$apply();
        expect(this.scope.todos.length).toEqual(2);
      });

    });

    describe("when toggle all", function() {
      it("should toggle all to completed", function() {
        this.scope.toggleAll(true);
        this.scope.$apply();
        expect(this.scope.remainingtodos.length).toBe(0);
        expect(this.scope.completedtodos.length).toBe(2);
      });

      it("should toggle all to active", function() {
        this.scope.toggleAll(false);
        this.scope.$apply();
        expect(this.scope.remainingtodos.length).toBe(2);
        expect(this.scope.completedtodos.length).toBe(0);
      });
    });

    describe("when clearing completed", function() {
      it("should remove completed todos from the todos list", function() {
        this.scope.clearCompleted();
        this.scope.$apply();
        expect(this.scope.completedtodos.length).toBe(0);
        expect(this.scope.todos.length).toBe(1);
      });
    });

  });
});
