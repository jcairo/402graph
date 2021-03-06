'use strict';

angular.module('graph')
.controller('searchController', function ($scope, DataManager) {
    $scope.searchText = '';

    $scope.search = function (searchText) {
        DataManager.getGraphData(searchText)
            .success( function (data) {
                $scope.$parent.graphData = data;
            })
            .error (function (data) {
                // Warn error.
            });
    };
});