'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:NgrepeatCtrl
 * @description
 * # NgrepeatCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('NgRepeatCtrl', function ($scope) {
    $scope.array = [{name: 'name1', description: 'this is a sample description'}, {name: 'name2', description: 'this is another sample description'}]
  });
