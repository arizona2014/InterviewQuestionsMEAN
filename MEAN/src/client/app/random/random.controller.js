(function() {
  'use strict';

  angular
    .module('app.random')
    .controller('RandomController', RandomController);

  RandomController.$inject = ['logger'];
  /* @ngInject */
  function RandomController(logger) {
    var vm = this;
    vm.title = 'Random Question';

    activate();

    function activate() {
      logger.info('Activated Random Question View');
    }
  }
})();
