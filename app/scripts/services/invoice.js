'use strict';

/**
 * @ngdoc service
 * @name canonApp.person
 * @description
 * # person
 * Service in the canonApp.
 */
angular.module('canonApp')
  .service('Invoice', ['$resource', function ($resource) {
    return $resource('api/invoice/:id', {}, {
      query: {method: 'GET', isArray: true},
      save: {method: 'POST'},
      delete: {method: 'DELETE'},
      update: {method: 'PUT'}
    });
  }]);
