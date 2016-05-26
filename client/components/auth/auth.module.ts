'use strict';

angular.module('skepticApp.auth', [
  'skepticApp.constants',
  'skepticApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
