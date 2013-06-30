'use strict';

app.controller('ProjectStatusCtrl', function ($scope, $routeParams, projectsService) {
    $scope.orderby = 'product';
    $scope.reverse = false;

    $scope.project = {};
    $scope.risks = {};
    $scope.milestones = {};
    init();

    function init() {
      //Grab projectID off of the route
      var projectID = ($routeParams.projectID) ? parseInt($routeParams.projectID) : 0;
      if (projectID > 0) {
        $scope.project = projectsService.getProject(projectID);
        $scope.risks = projectsService.getProjectRisks(projectID);
      };
    };

    $scope.getStatus = function (id) {
      var project = projectsService.getProject(id);
      if (project.status === 'delayed')
        return "text-error";
      else
        return "text-success";
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };


});
