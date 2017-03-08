define([
    '../../../../config/namespace',
    './directives/memoryGame'
], function(namespace, memoryGame) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.memoryGame', [namespace + '.editor'])
        .directive('editormemoryGame', memoryGame);
});