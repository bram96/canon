'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('ProductsCtrl',function ($scope, Product) {
    $scope.products = Product.query();

    $scope.saveProduct = function(data, id) {
      angular.extend(data, {id: id});
      if(id != null) {
        Product.update({id: id}, data);
      } else {
        Product.save(data);
        $scope.products = Product.query();
      }
    };

    // remove user
    $scope.removeProduct = function(index) {
      var id = $scope.products[index]._id;
      Product.delete({id: id});
      $scope.products.splice(index, 1);
    };

    $scope.addProduct = function() {
      $scope.inserted = {
        _id: null,
        name: null,
        description: null
      };
      $scope.products.push($scope.inserted);
    };
  });
