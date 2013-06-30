'use strict';

//This handles retrieving data and is used by controllers.

app.service('projectsService', function projectsService() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getProjects = function () {
      return projects;
    };

    this.getDelayedProjects = function () {
      var delayedProjects = 0;

      return delayedProjects;
    };

    this.getProject = function (id) {
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === id)
          return projects[i];
      }
    }

    this.getProjectRisks = function (id) {
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === id)
          return projects[i].risks;
      }
    }

    this.getProjectMilestones = function (id) {
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === id)
          return projects[i].milestones;
      }
    }

    var projectStatus = ["on-track", "delayed", "pending"];
    var taskStatus = ["completed", "not-started", "in-progress"];
    var riskPriority = ["高", "低"];

    var projects = [
      {
        id:1,
        projectName:"农产品收购系统一期功能增强",
        projectManager: "倪震宇",
        status: "on-track",
        projectStage: "开发阶段",
        projectProgress: "80%",
        contractRevenue: 625400,
        budgetCost: 600000,
        cost: 0,
        budgetStatus: "目前合同已经确认，但文本还没有签订",
        risks: [
          {status: 'on',
            priority: '高',
            desc: '梁经理的兼职处理很多事情，很难保证项目的投入',
            solution: '提醒'},
          {status: 'on',
            priority: '高',
            desc: '集团需求确认小组本身能力不够，或不够重视，导致确认需求与方案讨论效果不好。必须到现场试点才能暴露问题。',
            solution: '提醒。试点代表产线工厂来收集最确切的需求，同产线内通过会议、试用的方式确认需求与方案，为推广做准备。'},
          {status: 'off',
            priority: '低',
            desc: '实施人员水平不够，不够熟悉业务，缺乏沟通的经验',
            solution: '倪、章必须大力协助吕祥林的实施team'}
        ],
        milestones: [
          {task: 'v1.1.17 bug fix', originalTime: '2013-06-21', updatedTime: '', completedTime: '', status: 'completed'},
          {task: 'v1.1.17 SIT', originalTime: '2013-06-26', updatedTime: '', completedTime: '', status: 'no started'},
          {task: 'v1.1.17 UAT and manual', originalTime: '2013-06-30', updatedTime: '', completedTime: '', status: 'no started'}
        ],
      },

      {
        id:2, projectName:"Project 2", projectManager: "manager1", status: "on-track",
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
