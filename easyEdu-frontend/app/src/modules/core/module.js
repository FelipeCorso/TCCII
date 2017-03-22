define([
    '../../config/namespace',
    './config/module.routes',
    './provider/RouterHelperProvider'
], function (
    namespace,
    moduleRoutes,
    RouterHelperProvider
) {
    'use strict';
    angular.module(namespace + '.core', ['ui.router'])
        .provider('RouterHelper',RouterHelperProvider)
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
        }]);
});