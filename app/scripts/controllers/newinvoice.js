'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:NewinvoiceCtrl
 * @description
 * # NewinvoiceCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('NewinvoiceCtrl', function ($scope, $state, Invoice, Person, Product) {
    $scope.invoice = {};
    $scope.invoice.invoiceFields = [];
    $scope.invoice.products = [];
    $scope.persons = Person.query();
    $scope.products = Product.query();

    $scope.addField = function() {
      $scope.invoice.invoiceFields.push({});
    }
    $scope.deleteField = function(index) {
      $scope.invoice.invoiceFields.splice(index, 1);
    }

    $scope.addProduct = function() {
      $scope.invoice.products.push({});
    }
    $scope.deleteProduct = function(index) {
      $scope.invoice.products.splice(index, 1);
    }

    $scope.save = function() {
      Invoice.save({}, $scope.invoice, function() {
        $state.go('app.invoices');
      });
    }

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };
  });
