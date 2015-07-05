'use strict';

angular.module('prorunner.project', [])
  .config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('projects', {
          url: '/projects',
          views: {
            'content@': {
              templateUrl: '/prorunner/project/templates/list.html',
              controller: 'ProjectListCtrl'
            }
          }
        })

        .state('projects.project', {
          url: '/{id:[0-9]{1,4}}',
          views: {
            'content@': {
              templateUrl: '/prorunner/project/templates/project.html',
              controller: 'ProjectCtrl'
            }
          }
        })

        .state('projects.create', {
          url: '/create',
          views: {
            'content@': {
              templateUrl: '/prorunner/project/templates/create.html',
              controller: 'ProjectAddCtrl'
            }
          }
        });
    }
  ]);
