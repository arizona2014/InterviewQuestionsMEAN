(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  
    function dataservice($http, $q, exception, logger) {
    var service = {
      getCategories: getCategories,
      getMessageCount: getMessageCount,
      getLastPeople: getLastPeople,
      getRandom: getRandom 
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function getRandom() {
      return $http.get('/api/random')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getRandom')(e);
      }
    }

    function getLastPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getLastPeople')(e);
      }
    }

    function getCategories() {
      return $http.get('/api/categories')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getCategories')(e);
      }
    }
  }
})();
