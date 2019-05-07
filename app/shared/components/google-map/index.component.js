'use strict';

angular.module('myApp.shared')

  .component('googleMap', {
    templateUrl: './shared/components/google-map/index.component.html',
    bindings: {
      geoLocations: "<",
      selected: "<",
      markerClick: "&"
    },
    controller: [
      'SimpleGMap',
      '$element',
      '$scope',
      function (SimpleGMap, $element, $scope) {
        var $ctrl = this;
        $ctrl.markers = [];

        $ctrl.removeMarkers = function () {
          if (!this.markers) {
            return;
          }
          this.markers.forEach(function (marker) {
            marker.remove();
          });
          this.markers = [];
        };

        $ctrl.renderMarkers = function () {
          $ctrl.removeMarkers();
          $ctrl.markers = $ctrl.geoLocations.map(function (location) {
            var marker = $ctrl.gmap.createMarker(location);
            marker.on('click', function (obj) {
              $scope.$apply(function () {
                $ctrl.markerClick({ $event: obj });
              });
            });
            return marker;
          });
        };

        $ctrl.highlightSelected = function () {
          $ctrl.markers.forEach(function (marker) {
            var isHighlighted = marker.matches($ctrl.selected);
            marker.toggleHighlight(isHighlighted);
          });
        };

        $ctrl.$postLink = function () {
          var domEl = $element.find('div')[0];
          $ctrl.gmap = new SimpleGMap(domEl);
          if ($ctrl.geoLocations) {
            $ctrl.renderMarkers();
          }
        };

        $ctrl.$onChanges = function (changesObj) {
          console.log('chnages', changesObj);
          if (changesObj.geoLocations && $ctrl.gmap && $ctrl.geoLocations) {
            $ctrl.renderMarkers();
            $ctrl.highlightSelected();
          }

          if (changesObj.selected && $ctrl.gmap) {
            $ctrl.highlightSelected();
          }
        };
      }
    ],

  });
