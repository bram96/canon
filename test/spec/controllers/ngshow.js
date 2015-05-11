'use strict';

describe('Controller: NgshowCtrl', function () {

  // load the controller's module
  beforeEach(module('canonApp'));

  var NgshowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgshowCtrl = $controller('NgshowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
