'use strict';

angular.module('myApp.shared')

  .factory('SimpleGMap', [
    '$window',
    'GMapMarker',
    function ($window, GMapMarker) {
      var google = $window.google;
      if (!google) {
        throw new Error('Google Maps not available');
      }

      function SimpleGMap(element) {
        var center = new google.maps.LatLng(52.14, 21.0);
        this.map = new google.maps.Map(element, {
          center: center,
          zoom: 6,
        });
        this.markers = [];
        this.latLngs = [];
      }

      SimpleGMap.prototype.createMarker = function (object) {
        var latLng = new google.maps.LatLng(object.lat, object.lng);
        this.latLngs.push(latLng);
        var marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          title: object.title,
        });
        this.markers.push(marker);
        return new GMapMarker(marker, object);
      };

      return SimpleGMap;
    }
  ]);
