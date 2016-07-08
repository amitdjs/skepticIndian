'use strict';

(function() {

  class PollController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
    }

    $onInit() {
      console.log("Started")
    }
  }

  angular.module('skepticApp')
    .component('poll', {
      templateUrl: 'app/poll/poll.html',
      controller: PollController
    });

})();
