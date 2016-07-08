'use strict';

angular.module('skepticApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      })
        .when('/poll', {
          template: '<poll></poll>'
        });
  });
