'use strict';

describe('Controller: NgmodelCtrl', function () {

  // load the controller's module
  beforeEach(module('canonApp'));

  var NgmodelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgmodelCtrl = $controller('NgmodelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
