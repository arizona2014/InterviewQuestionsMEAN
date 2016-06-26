(function() {
  'use strict';

  angular
    .module('app.random')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'random',
        config: {
          url: '/random',
          templateUrl: 'app/random/random.html',
          controller: 'RandomController',
          controllerAs: 'vm',
          title: 'Random Question',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Random Question'
          }
        }
      }
    ];
  }
})();
