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
      function () {
        var $ctrl = this;

        $ctrl.handleDeleteTodo = function (todo) {
          //TODO
        };

        $ctrl.handleCreateTodo = function (todoData) {
          //TODO
        };

        var TODOS = [
          { id: 100, title: 'Buy milk', description: '2%' },
          { id: 200, title: 'Walk a dog' },
          { id: 100, title: 'Do homework', description: 'Math, Physics' },
        ];
        $ctrl.todos = [];
      }
    ]
  });
