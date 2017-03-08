define([
    '../../../../config/namespace',
    './directives/genericLayout'
], function(namespace, genericLayout) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.genericLayout', [namespace + '.editor'])
        .directive('editorGenericLayout', genericLayout);
});