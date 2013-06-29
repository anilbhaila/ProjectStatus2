'use strict';

//This handles retrieving data and is used by controllers.

app.service('projectsService', function projectsService() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getProjects = function () {
      return projects;
    };

    this.getDelayedProjects = function () {
      var delayedProjects = [];
      for (var i = 0; i < projects.length; i++) {
            if (projects[i].status === "delayed") {
              delayedProjects.push(projects[i]);
            }
        }
    };

    this.getProject = function (id) {
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === id)
          return projects[i];
      }

      return projects[id].status;
    }

    var projects = [
      {
        id:1, projectName:"Project 1", projectManager: "manager1", status: "on-track",
        risks: [
          {status: 'on', desc: 'this is risk1'},
          {status: 'off', desc: 'this is risk2'}
        ]
      },
      {
        id:2, projectName:"Project 2", projectManager: "manager1", status: "on-track",
        risks: [
          {status: 'on', desc: 'this is risk1'},
          {status: 'off', desc: 'this is risk2'}
        ]
      },
      {
        id:3, projectName:"Project 3", projectManager: "manager2", status: "delayed",
        risks: [
          {status: 'on', desc: 'this is risk1'},
          {status: 'off', desc: 'this is risk2'}
        ]
      },
      {
        id:4, projectName:"Project 4", projectManager: "manager3", status: "on-track",
        risks: [
          {status: 'on', desc: 'this is risk1'},
          {status: 'off', desc: 'this is risk2'}
        ]
      },
    ];

  });
