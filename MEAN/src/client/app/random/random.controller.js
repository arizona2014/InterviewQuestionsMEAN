(function() {
  'use strict';

  angular
    .module('app.random')
    .controller('RandomController', RandomController);

  RandomController.$inject = ['$q', 'dataservice','logger', '$scope'];
  /* @ngInject */
  function RandomController($q, dataservice,logger,$scope) {
    var vm = this;
    vm.title = 'Random Question';
    vm.question = [];

    activate();


    function activate() {
      var promises = [getRandom()];
      return $q.all(promises).then(function() {
        logger.info('Activated Random Question View');
        getRandom().then(function(result){
          var lgt = result.length - 1;
          var indx = Math.floor(Math.random() * lgt);
          vm.question = result[indx];
        });
      });
    }

    function getRandom() {
      return dataservice.getRandom().then(function(data) {
        return data;
      });
    }

    $scope.anotherOne = function(){

      getRandom().then(function(result){
        var lgt = result.length - 1;
        var indx = Math.floor(Math.random() * lgt);
        vm.question = result[indx];
      });
    };

  }
})();
