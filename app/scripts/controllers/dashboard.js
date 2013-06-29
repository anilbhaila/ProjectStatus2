'use strict';

//This controller retrieves data from the projectsService and associates it with the $scope
//The $scope is ultimately bound to the dashboard view, which lists all the projects in card

app.controller('DashboardCtrl', function ($scope, projectsService) {
    $scope.delayedProjects = projectsService.getDelayedProjects();

    $scope.allProjects = projectsService.getProjects();

    $scope.getStatus = function (id) {
      var project = projectsService.getProject(id);
      if (project.status === 'delayed')
        return "cardHeaderRed";
      else
        return "cardHeader";
    }
  });
