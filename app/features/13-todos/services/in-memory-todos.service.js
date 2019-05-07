'use strict';

angular.module('myApp.api')
  .factory('inMemoryTodos', [
    function () {
      var TODOS = [
        { id: 100, title: 'Buy milk', description: '2%' },
        { id: 200, title: 'Walk a dog' },
        { id: 100, title: 'Do homework', description: 'Math, Physics' },
      ];

      var inMemoryTodos = {
        getAll: function () {
          return TODOS;
        },

        create: function (data) {
          TODOS.push({
            id: Math.random(),
            title: data.title,
            description: data.description
          });
        },

        remove: function (todo) {
          var index = TODOS.indexOf(todo);
          if (index > -1) {
            TODOS.splice(index, 1);
          }
        }
      };

      return inMemoryTodos;
    }
  ]);
