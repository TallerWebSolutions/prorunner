'use strict';

angular
  .module('prorunner', [
    'ui.router',
    'sails.io',
    'ngBootbox',

    'prorunner.project'
  ])

  .factory('_', [
    '$window',
    function factory($window) {
      return $window._;
    }
  ])

  .constant('BackendConfig', {
    url: window.io.sails.url
  })

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      // For any unmatched url, redirect to /home
      $urlRouterProvider.otherwise('/projects');
    }
  ]);
