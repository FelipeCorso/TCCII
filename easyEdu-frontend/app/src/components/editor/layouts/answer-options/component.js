define([
    '../../../../config/namespace',
    './directives/answer-options',
    './services/DifficultyLevels'
], function (namespace, answerOptions, DifficultyLevels) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.answer-options', [namespace + '.editor'])
        .directive('editorAnswerOptions', answerOptions)
        .service('DifficultyLevels', DifficultyLevels);
});