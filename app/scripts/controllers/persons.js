'use strict';

/**
 * @ngdoc function
 * @name canonApp.controller:PersonsCtrl
 * @description
 * # PersonsCtrl
 * Controller of the canonApp
 */
angular.module('canonApp')
  .controller('PersonsCtrl', function ($scope, Person) {
    $scope.persons = Person.query();

    $scope.savePerson = function(data, id) {
      angular.extend(data, {id: id});
      if(id != null) {
        Person.update({id: id}, data);
      } else {
        Person.save(data);
        $scope.persons = Person.query();
      }

    };

    // remove user
    $scope.removePerson = function(index) {
      var id = $scope.persons[index]._id;
      Person.delete({id: id});
      $scope.persons.splice(index, 1);
    };

    // add user
    $scope.addPerson = function() {
      $scope.inserted = {
        _id: null,
        name:null,
        zipcode: null,
        city: null,
        street: null,
        address: null,
        email: null
      };
      $scope.persons.push($scope.inserted);
    };
  });
