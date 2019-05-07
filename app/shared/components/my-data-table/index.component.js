'use strict';

angular.module('myApp.shared')

  .component('myDataTable', {
    templateUrl: './shared/components/my-data-table/index.component.html',
    bindings: {
      items: "<",
      selectedItem: "<",
      headers: "<",
      itemClick: "&"
    },
    controller: [
      function () {
        var $ctrl = this;
        $ctrl.handleRowClick = function (item) {
          $ctrl.itemClick({ $event: item });
        };
      }
    ]
  });
