define([
    '../../../config/namespace',
    './controllers/WordCtrl',
    './config/module.routes'
], function(namespace,
            WordCtrl,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor.activity', [
        'ui.router'
        , namespace + '.navigation'
        // , namespace + '.components.editor.layouts.genericLayout'
    ])
    .controller('WordCtrl', WordCtrl)
    // .factory('MyGallerySvc', MyGallerySvc)
        .run(['PrimaryNavigation', 'RouterHelper', function(PrimaryNavigation, RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
        }]);
});