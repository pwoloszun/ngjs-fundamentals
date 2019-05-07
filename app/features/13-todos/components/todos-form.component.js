'use strict';

angular.module('myApp.todosMod')

  .component('todosForm', {
    templateUrl: './features/13-todos/components/todos-form.component.html',
    bindings: {
      createItem: '&'
    },
    controller: [
      function () {
        var $ctrl = this;
        $ctrl.tmpTitle = '';
        $ctrl.tmpDescription = '';

        $ctrl.handleSubmit = function () {
          if (!$ctrl.isValid()) {
            return;
          }
          var todoData = {
            title: $ctrl.tmpTitle,
            description: $ctrl.tmpDescription
          };
          $ctrl.createItem({ $event: todoData });
          $ctrl.clear();
        };

        $ctrl.isValid = function () {
          return $ctrl.tmpTitle && $ctrl.tmpTitle.length > 0;
        };

        $ctrl.clear = function () {
          $ctrl.tmpTitle = '';
          $ctrl.tmpDescription = '';
        };
      }
    ]
  });
