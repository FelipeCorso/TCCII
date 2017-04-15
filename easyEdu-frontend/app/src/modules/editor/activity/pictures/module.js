define([
    '../../../../config/namespace',
    './controllers/PicturesCtrl',
    './config/module.routes'
], function(namespace,
            PicturesCtrl,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor.activity.pictures', [
        'ui.router'
        , namespace + '.navigation'
        // , namespace + '.components.editor.layouts.genericLayout'
    ])
        .controller('PicturesCtrl', PicturesCtrl)
        // .factory('MyGallerySvc', MyGallerySvc)
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
        }]);
});