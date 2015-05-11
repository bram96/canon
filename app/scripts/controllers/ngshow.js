'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:NgshowCtrl
 * @description
 * # NgshowCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('NgShowCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
