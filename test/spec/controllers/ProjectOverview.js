'use strict';

describe('Controller: ProjectOverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ProjectStatus2App'));

  var ProjectOverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectOverviewCtrl = $controller('ProjectOverviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
