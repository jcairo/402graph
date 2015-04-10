'use strict';

angular.module('graph', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })

      .state('graph', {
        url: '/graph',
        templateUrl: 'app/graph/graph.html',
        controller:  'GraphCtrl'
      });

    $urlRouterProvider.otherwise('/login');
  })
;
