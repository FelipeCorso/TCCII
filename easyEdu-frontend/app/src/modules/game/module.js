define([
    '../../config/namespace',
    './controllers/GameCtrl',
    './config/module.routes'
], function(namespace,
            GameCtrl,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.game', [
        'ui.router'
        , namespace + '.navigation'
    ])
        .controller('GameCtrl', GameCtrl)
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
        }]);
});