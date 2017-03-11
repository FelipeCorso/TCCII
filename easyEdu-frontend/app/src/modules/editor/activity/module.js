define([
    '../../../config/namespace',
    './controllers/MyGalleryCtrl',
    './services/MyGallerySvc',
    './config/module.routes'
], function(namespace,
            MyGalleryCtrl,
            MyGallerySvc,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor.activity', [
        'ui.router'
        , namespace + '.navigation'
        // , namespace + '.components.editor.layouts.genericLayout'
    ])
    // .controller('MyGalleryCtrl', MyGalleryCtrl)
    // .factory('MyGallerySvc', MyGallerySvc)
        .run(['PrimaryNavigation', 'RouterHelper', function(PrimaryNavigation, RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
        }]);
});