'use strict';

describe('Controller: DashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('ProjectStatus2App'));

  var DashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: scope
    });
  }));

});
