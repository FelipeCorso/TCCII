define(function() {
    'use strict';
    appConfig.$inject = ['$urlRouterProvider'];
    /*@ngInject*/
    function appConfig($urlRouterProvider) {
        $urlRouterProvider
        /**
         * Redirect to root
         */
            .otherwise('/editor/gallery');
    }

    return appConfig;
});
