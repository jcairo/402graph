'use strict';

// Gets graph data for an author.
angular.module('graph')
.service('DataManager', function ($http, appConstants, UserService) {
    return {
        getGraphData: function(author) {
            author.replace(' ', '+');
            var req = {
                method: 'GET',
                url: appConstants.host + '/api' +
                    '/author/' + author +
                    '/network' +
                    '/' + 'node_link_data',
                headers: {
                    'user': 'cmput402',
                    'password': 'qpskcnvb'
                }
            };
            return $http(req);
        }
    };
});