'use strict';

/*#######################################################################

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers
      /directives
      /services
      /partials
      /views

  #######################################################################*/
var app = angular.module('ProjectStatus2App', []);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard',
        {
          controller: 'DashboardCtrl',
          templateUrl: 'views/dashboard.html'
        })
      //Define a route that has a route parameter in it (:projectID)
      .when('/projectstatus/:projectID',
        {
          controller: 'ProjectStatusCtrl',
          templateUrl: 'views/projectStatus.html'
        })
      .when('/overview',
        {
          controller: 'ProjectOverviewCtrl',
          templateUrl: 'views/overview.html'
        })
      .otherwise(
        {
          redirectTo: '/dashboard'
        });
  });

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

