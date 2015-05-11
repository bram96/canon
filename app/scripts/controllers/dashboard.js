'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
