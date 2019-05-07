'use strict';

angular.module('myApp.inputsOutputsMod')

  .component('carConfigurator', {
    templateUrl: './features/12-inputs-outputs-examples/components/car-configurator.component.html',
    controller: [
      function () {
        var $ctrl = this;

        $ctrl.selectedEngine = null;
        $ctrl.engines = ['Petrol', 'Diesel', 'Tesla'];
        $ctrl.selectedColor = null;
        $ctrl.colors = ['Black', 'White', 'Red', 'Yellow'];
        $ctrl.selectedDriveWheel = null;
        $ctrl.driveWheels = ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'];

        $ctrl.handleSelectEngine = function (engine) {
          console.log('selectEngine(engine)', engine);
          $ctrl.selectedEngine = engine;
        };
        $ctrl.handleSelectColor = function (color) {
          console.log('color', color);
          $ctrl.selectedColor = color;
        };
        $ctrl.handleSelectDriveWheel = function (driveWheel) {
          $ctrl.selectedDriveWheel = driveWheel;
        };


      }
    ]
  });
