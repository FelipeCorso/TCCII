define([
    '../../../../config/namespace',
    './directives/answerOptions'
], function(namespace, answerOptions) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.answerOptions', [namespace + '.editor'])
        .directive('editorAnswerOptions', answerOptions);
});