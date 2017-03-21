define([
    '../../../../config/namespace',
    './controllers/WordCtrl',
    './config/module.routes'
], function(namespace,
            WordCtrl,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor.activity.word', [
        'ui.router'
        , namespace + '.navigation'
        // , namespace + '.components.editor.layouts.genericLayout'
    ])
        .controller('WordCtrl', WordCtrl)
        // .factory('MyGallerySvc', MyGallerySvc)
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
        }]);
});