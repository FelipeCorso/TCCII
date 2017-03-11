define([
    '../../../../config/namespace',
    './directives/generic-layout'
], function(namespace, genericLayout) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.generic-layout', [namespace + '.editor'])
        .directive('editorGenericLayout', genericLayout);
});