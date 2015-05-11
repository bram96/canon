'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:InvoiceCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('InvoiceCtrl', function ($scope, $stateParams, Invoice) {
    $scope.invoice = Invoice.get({id:$stateParams.id});
    $scope.total = 0;
  });
