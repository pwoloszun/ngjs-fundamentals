'use strict';

angular.module('myApp.todosMod', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/todos', {
        template: '<todos-page></todos-page>'
      });
    }
  ])

  .component('todosPage', {
    templateUrl: './features/13-todos/index.html',
    controller: [
      'inMemoryTodos',
      function (inMemoryTodos) {
        var $ctrl = this;
        $ctrl.handleDeleteTodo = function (todo) {
          inMemoryTodos.remove(todo);
        };
        $ctrl.handleCreateTodo = function (todoData) {
          inMemoryTodos.create(todoData);
        };

        $ctrl.todos = inMemoryTodos.getAll();
      }
    ]
  });
