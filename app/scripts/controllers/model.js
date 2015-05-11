'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('ModelCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
