define([
    '../../../../config/namespace',
    './directives/answer-options'
], function(namespace, answerOptions) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.answer-options', [namespace + '.editor'])
        .directive('editorAnswerOptions', answerOptions);
});