'use strict';

angular.module('myApp.shared')

  .factory('GMapMarker', [
    function () {
      var HIGHLIGHTED_ICON = './assets/marker-icon-2x.png';

      function GMapMarker(googleMarker, object) {
        this.marker = googleMarker;
        this.object = object;
      }

      GMapMarker.prototype.on = function (eventName, listenerFn) {
        var that = this;
        this.marker.addListener(eventName, function () {
          listenerFn.call(that.marker, that.object, this);
        });
      };

      GMapMarker.prototype.toggleHighlight = function (isHighlighted) {
        this.marker.setIcon(isHighlighted ? HIGHLIGHTED_ICON : null);
      };

      GMapMarker.prototype.matches = function (object) {
        return this.object === object;

      };

      GMapMarker.prototype.remove = function () {
        this.marker.setMap(null);
      };

      return GMapMarker;
    }
  ]);
