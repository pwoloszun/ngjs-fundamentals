'use strict';

window.$script([
  'lib/angular/angular.js',
  'lib/angular-animate/angular-animate.js',
  'lib/angular-aria/angular-aria.js',
  'lib/angular-material/angular-material.js',
  'lib/angular-resource/angular-resource.js',
  'lib/angular-route/angular-route.js',

  // app
  'app.js',

  // shared
  'shared/index.js',
  'shared/components/my-data-table/index.component.js',
  'shared/components/google-map/gmap-marker.service.js',
  'shared/components/google-map/simple-gmap.service.js',
  'shared/components/google-map/index.component.js',

  // core
  'core/index.js',
  'core/main-navigation/main-navigation.js',

  // api modules
  'api/index.js',
  'api/data-api.service.js',
  'api/todos-api.js',
  'api/heroes-api.js',
  'api/real-estates-api.js',

  // features
  'features/01-controllers-basics/index.js',
  'features/01-controllers-basics/controllers/person.controller.js',

  'features/11-component-basics/index.js',
  'features/11-component-basics/components/hello-world.component.js',
  'features/11-component-basics/components/personal-data.component.js',

  'features/12-inputs-outputs-examples/index.js',
  'features/12-inputs-outputs-examples/components/my-parent.component.js',
  'features/12-inputs-outputs-examples/components/my-child.component.js',
  'features/12-inputs-outputs-examples/components/car-configurator.component.js',
  'features/12-inputs-outputs-examples/components/option-picker.component.js',

  'features/13-todos/index.js',
  'features/13-todos/services/in-memory-todos.service.js',
  'features/13-todos/components/todos-form.component.js',
  'features/13-todos/components/todos-list.component.js',

  'features/14-heroes/index.js',
  'features/15-cities/index.js',

  'features/16-real-estates/index.js',
  'features/16-real-estates/services/manage-real-estates.service.js',
  'features/16-real-estates/components/real-estate-details.component.js',

  'features/21-forms/index.js',
  'features/21-forms/services/async-validator.service.js',
  'features/21-forms/services/sync-validator.service.js',
  'features/21-forms/services/countries.service.js',
  'features/21-forms/services/interests.service.js',
  'features/21-forms/components/basic-form.component.js',
  'features/21-forms/components/registration-form.component.js'

], function () {
  // when all is done, execute bootstrap AngularJS application
  angular.bootstrap(window.document, ['myApp']);
});
