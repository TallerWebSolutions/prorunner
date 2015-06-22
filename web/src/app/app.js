
angular.module('prorunner', [
  'ngRoute',
  'prorunner.project'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/project', {
      controller: 'ProjectCtrl',
      templateUrl: '/prorunner/project/templates/project.html'
    })
    .otherwise({
      redirectTo: '/project'
    });
});
