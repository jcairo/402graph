'use strict';

/*
* Checks/saves login credentials.
*/
angular.module('graph')
.service('UserService', function ($http, appConstants) {
    return {
        user: {
            username: 'cmput402',
            password: 'qpskcnvb'

        },

        checkCreds: function (username, password) {
            var self = this;
            var req = {
                method: 'GET',
                url: appConstants.host + '/api/credcheck',
                headers: {
                    'user': username,
                    'password': password,
                }
            };

            return $http(req)
                .success( function () {
                    self.user.username = 'comput402' //username;
                    self.user.password = 'qpskcnvb' //password;
                    self.user.loggedIn = true;
            });
        }
    };
});