'use strict';

angular.module('myApp.todosMod')

  .component('todosList', {
    templateUrl: './features/13-todos/components/todos-list.component.html',
    bindings: {
      items: '<',
      deleteItem: '&'
    },
    controller: [
      function () {
        var $ctrl = this;

        $ctrl.handleDelete = function (item) {
          $ctrl.deleteItem({ $event: item });
        };

        $ctrl.hasAnyItems = function () {
          return $ctrl.items && $ctrl.items.left > 0;
        };
      }
    ]
  });
