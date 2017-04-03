define( function () {
    'use strict';
    appConfig.$inject = ['$urlRouterProvider'];
    /*@ngInject*/
    function appConfig($urlRouterProvider) {
        $urlRouterProvider
        .when('/editor', '/editor/gallery')
        .when('/editor/', '/editor/gallery')
        .when('/game', '/game/')

        /**
         * Redirect to root
         */
            .otherwise('/game/');
    }

    return appConfig;
});
