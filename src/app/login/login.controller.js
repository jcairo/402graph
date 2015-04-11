'use strict';

angular.module('graph')
.controller('LoginCtrl', function ($scope, $state, UserService) {
  $scope.login = function(username, password) {
    UserService.checkCreds(username, password)
      .success( function (data) {
        $state.go('graph');
      })
      .error( function (data) {
        // Promprt for login again.
      });
  };
});
