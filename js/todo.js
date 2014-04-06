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

angular.module('Todo').controller('TodoCtrl', function($scope, $filter) {
  $scope.newTodo = '';
  $scope.filterQuery = '';

  $scope.$watch('todos', function() {
    $scope.remainingtodos = $filter('filter')($scope.todos, {completed: false});
    $scope.completedtodos = $filter('filter')($scope.todos, {completed: true});
  }, true);

  $scope.todos = [
    {
      completed: true,
      label: "Be awesome"
    },
    {
      completed: false,
      label: "Learn AngularJS"
    },
    {
      completed: false,
      label: "Rule the world!"
    }
  ];

  $scope.addTodo = function() {
    if($scope.newTodo == '') {
      return;
    }

    $scope.todos.push({completed: false, label: $scope.newTodo})
    $scope.newTodo = '';
  }

  $scope.removeTodo = function(todo) {
    var index = $scope.todos.indexOf(todo);
    if(index >= 0) {
      $scope.todos.splice(index, 1);
    }
  }

  $scope.toggleAll = function(toggleAll) {
    angular.forEach($scope.todos, function(todo) {
      todo.completed = toggleAll;
    });
  }

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function (val) {
					return !val.completed;
				});
    }
});
