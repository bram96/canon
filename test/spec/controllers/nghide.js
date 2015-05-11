'use strict';

describe('Controller: NghideCtrl', function () {

  // load the controller's module
  beforeEach(module('canonApp'));

  var NghideCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NghideCtrl = $controller('NghideCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
