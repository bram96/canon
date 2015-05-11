'use strict';

/**
 * @ngdoc service
 * @name canonApp.product
 * @description
 * # product
 * Service in the canonApp.
 */
angular.module('canonApp')
  .service('Product', ['$resource', function ($resource) {
    return $resource('api/product/:id', {}, {
      query: {method: 'GET', isArray: true},
      save: {method: 'POST'},
      delete: {method: 'DELETE'},
      update: {method: 'PUT'}
    });
  }]);
