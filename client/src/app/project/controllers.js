'use strict';

angular.module('prorunner.project')

  .controller('ProjectListCtrl', [
    '$scope',
    '$sailsSocket',
    function($scope, $sailsSocket) {
      // Get projects
      $sailsSocket.get('/project')
        .success(function (data, status, headers, config) {
          $scope.items = data;
        });

      // Remove item
      $scope.cofirmDelete = function (index) {
        var projectId = $scope.items[index].id;

        $sailsSocket.delete('/project/' + projectId)
        .success(function (data, status, headers, config) {
          $scope.items.splice(index, 1);
        });
      }
    }
  ])

  .controller('ProjectCtrl', [
    '$scope', '$state',
    '$sailsSocket',
    function($scope, $state, $sailsSocket) {
      var itemId = $state.params.id;
      // Get projects
      $sailsSocket.get('/project/' + itemId)
        .success(function (data, status, headers, config) {
          $scope.item = data;
        });
    }
  ])

  .controller('ProjectAddCtrl', [
    '$scope', '$state', '$sailsSocket',
    function($scope, $state, $sailsSocket) {

      $scope.project = {
        name: '',
        description: ''
      };

      $scope.createProject = function () {
        $sailsSocket.post('/project', $scope.project)
        .success(function (data, status, headers, config) {
          $state.go('projects');
        });
      };
    }
  ]);
