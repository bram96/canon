'use strict';

describe('Controller: AutonumberCtrl', function () {

  // load the controller's module
  beforeEach(module('canonApp'));

  var AutonumberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutonumberCtrl = $controller('AutonumberCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
