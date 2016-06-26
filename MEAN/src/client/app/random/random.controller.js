(function() {
  'use strict';

  angular
    .module('app.random')
    .controller('RandomController', RandomController);

  RandomController.$inject = ['$q', 'dataservice','logger'];
  /* @ngInject */
  function RandomController($q, dataservice,logger) {
    var vm = this;
    vm.title = 'Random Question';
    vm.question = [];

    activate();

    function activate() {
      var promises = [getRandom()];
      return $q.all(promises).then(function() {
        logger.info('Activated Random Question View');
      });      
    }

    function getRandom() {
      return dataservice.getRandom().then(function(data) {
        vm.question = data;
        return vm.question;
      });
    }

  }
})();
