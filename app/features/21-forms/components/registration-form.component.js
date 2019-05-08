'use strict';

angular.module('myApp.formsMod')

  .component('registrationForm', {
    templateUrl: './features/21-forms/components/registration-form.component.html',
    controller: [
      // TODO
      function () {
        var $ctrl = this;

        $ctrl.data = {
          name: null,
          age: null,
          country: null,
          areDetailsEnabled: false,
          details: {},
          selectedInterestTypes: {},
          selectedInterests: []
        };

        $ctrl.handleSubmit = function (regForm) {
          if (regForm.$valid) {
            regForm.$setSubmitted();
            console.log('Valid Form', $ctrl.data);
          } else {
            console.log('Invalid Form!');
          }
        };
      }
    ]
  });
