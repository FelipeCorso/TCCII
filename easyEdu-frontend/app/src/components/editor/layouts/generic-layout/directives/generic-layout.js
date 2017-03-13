define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/generic-layout/view/_generic-layout.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                activity: "="
            }
        };
    }

    Controller.$inject = [];
    /*@ngInject*/
    function Controller() {
        var vm = this;
    }

    return Component;
});