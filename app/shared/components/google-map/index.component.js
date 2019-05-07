'use strict';

angular.module('myApp.shared')

  .component('googleMap', {
    templateUrl: './shared/components/google-map/index.component.html',
    // TODO
    controller: [
      'SimpleGMap',
      function (SimpleGMap) {
        var $ctrl = this;

        // TODO 1: init simple gmap:
        // var gmap = new SimpleGMap(el)
        // TODO 2: render markers:
        // var marker = gmap.createMarker(objWithLatLng)
        // TODO 3: handle marker click using marker.on('click', funListener) method
        // TODO 4: handle 'selected' prop change, and toggle highlight on marker related to selected geoObject
      }
    ],

  });
