'use strict';

angular.module('myApp.realEstatesMod')
  .factory('manageRealEstates', [
    'realEstatesApi',
    function (realEstatesApi) {
      var manageRealEstates = {
        selectedRealEstate: null,
        realEstates: [],

        fetch: function () {
          // TODO 1: fetch real estates using realEstatesApi
        },

        toggleRealEstate: function (estate) {
          // TODO 2: impl toggle realEstate
        }
      };

      return manageRealEstates;
    }
  ]);
