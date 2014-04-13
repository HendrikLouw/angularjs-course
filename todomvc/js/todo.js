angular.module('Todo', []);

angular.module('Todo').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

angular.module('Todo').factory('Todos', function($filter) {
  var todos = [];

  var all = function() {
    return todos;
  }

  var completed = function() {
    return todos.filter(function (val) { return val.completed; });
  }

  var remaining = function() {
    return todos.filter(function (val) { return !val.completed; });
  }

  var add = function(newTodo) {
    todos.push(newTodo);
  }

  var remove = function(todo) {
    var index = todos.indexOf(todo);
    if(index >= 0) {
      todos.splice(index, 1);
    }
  }

  var toggleAll = function(toggleAll) {
    angular.forEach(todos, function(todo) {
      todo.completed = toggleAll;
    });
  }

  var clearCompleted = function() {
    angular.forEach(completed(), function(todo) {
      remove(todo);
    });
  }

  return {
    all: all,
    completed: completed,
    remaining: remaining,
    add: add,
    remove: remove,
    toggleAll: toggleAll,
    clearCompleted: clearCompleted
  }
});

angular.module('Todo').controller('TodoCtrl', function($scope, $filter, Todos) {
  $scope.newTodo = '';
  $scope.filterQuery = '';

  $scope.$watch('Todos.all()', function() {
    $scope.todos = Todos.all();
  }, true);

  $scope.$watch('todos', function() {
    $scope.remainingtodos = Todos.remaining();
    $scope.completedtodos = Todos.completed();
  }, true);

  $scope.addTodo = function() {
    if($scope.newTodo == '') {
      return;
    }
    Todos.add({completed: false, label: $scope.newTodo});
    $scope.newTodo = '';
  }

  $scope.removeTodo = function(todo) {
    Todos.remove(todo);
  }

  $scope.toggleAll = function(toggleAll) {
    Todos.toggleAll(toggleAll);
  }

  $scope.clearCompleted = function() {
    Todos.clearCompleted();
  }

});
