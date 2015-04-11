'use strict';

angular.module('graph')
.directive('network', function (DataManager) {
    return {
        restrict: 'E',
        replace: false,
        link: function (scope, element, attrs) {
            var data = DataManager.data;

        }
    };
});