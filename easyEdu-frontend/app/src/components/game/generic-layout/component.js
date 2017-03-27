define([
    '../../../config/namespace',
    './directives/generic-layout'
], function(namespace, genericLayout) {
    'use strict';
    angular.module(namespace + '.components.game.generic-layout', [namespace + '.game'])
        .directive('gameGenericLayout', genericLayout);
});