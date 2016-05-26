'use strict';

angular.module('skepticApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      });
  });
