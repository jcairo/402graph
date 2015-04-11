'use strict';

angular.module('graph')
.directive('header', function (DataManager) {
    return {
        restrict: 'E',
        replace: false,
        link: function (scope, element, attrs) {

        },
        controller: 'searchController',
        templateUrl: 'app/graph/search_header.template.html'
    };
});