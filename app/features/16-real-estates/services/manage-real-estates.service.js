'use strict';

angular.module('myApp.realEstatesMod')
  .factory('manageRealEstates', [
    'realEstatesApi',
    function (realEstatesApi) {
      var manageRealEstates = {
        selectedRealEstate: null,
        realEstates: [],

        fetch: function () {
          realEstatesApi.getAll().then((realEstates) => {
            this.realEstates = realEstates;
          });
        },

        toggleRealEstate: function (estate) {
          if (this.selectedRealEstate === estate) {
            this.selectedRealEstate = null;
          } else {
            this.selectedRealEstate = estate;
          }
        }
      };

      return manageRealEstates;
    }
  ]);
