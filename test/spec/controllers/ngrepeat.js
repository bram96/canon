'use strict';

describe('Controller: NgrepeatCtrl', function () {

  // load the controller's module
  beforeEach(module('canonApp'));

  var NgrepeatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgrepeatCtrl = $controller('NgrepeatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
