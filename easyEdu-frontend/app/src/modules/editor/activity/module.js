define([
    '../../../config/namespace',
    './config/module.routes'
], function(namespace,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor.activity', [
        'ui.router'
        , namespace + '.navigation'
        // , namespace + '.components.editor.layouts.genericLayout'
    ])
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
        }]);
});