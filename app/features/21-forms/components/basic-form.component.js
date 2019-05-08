'use strict';

angular.module('myApp.formsMod')

  .component('basicForm', {
    templateUrl: './features/21-forms/components/basic-form.component.html',
    controller: [
      '$scope',
      'asyncValidator',
      'syncValidator',
      function ($scope, asyncValidator, syncValidator) {
        var $ctrl = this;

        $ctrl.user = {};
        $ctrl.master = {};
        $ctrl.editorOptions = [
          { text: 'Vim Editor', value: 'vim' },
          { text: 'c++ Notepad', value: 'cpp_nodepad' },
          { text: 'Emacs', value: 'emacs' }
        ];

        $ctrl.saveForm = function (basicForm) {
          if (basicForm.$invalid) {
            return;
          }
          $ctrl.master = angular.copy($ctrl.user);
        };

        $ctrl.resetForm = function () {
          $ctrl.user = {};
        };

        $ctrl.$postLink = function () {
          var basicForm = $scope.basicForm;

          basicForm.userAge.$validators.isBetween = function (modelValue, viewValue) {
            return syncValidator.isBetween(21, 75, modelValue);
          };

          basicForm.userName.$asyncValidators.isBatman = function (modelValue, viewValue) {
            return asyncValidator.isBatman(modelValue);
          };
        };
      }
    ]
  });
