'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:InvoicesCtrl
 * @description
 * # InvoicesCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('InvoicesCtrl', function ($scope, Invoice) {
    $scope.invoices = Invoice.query();
  });
