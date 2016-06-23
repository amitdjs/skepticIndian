'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      var num = 0;
      _.each(this.awesomeThings, function(t) {
        t.even = num%2;
        num++;
      });
      this.socket.syncUpdates('thing', this.awesomeThings);
      console.log(this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('skepticApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
