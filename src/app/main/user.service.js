'use strict';

/*
* Checks/saves login credentials.
*/
angular.module('graph')
.service('UserService', function ($http) {
    var user = {};
    return {
        checkCreds: function (username, password) {
            var req = {
                method: 'GET',
                url:'http://localhost:5000/api/credcheck',
                headers: {
                    'user': username,
                    'password': password,
                }
            };

            return $http(req)
                .success( function () {
                    $http.defaults.headers.common.user = username;
                    $http.defaults.headers.common.password = password;
                    user.loggedIn = true;
            });
        }
    };
});