define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/generic-layout/view/_generic-layout.html',
            controller: function() {},
            controllerAs: 'vm',
            bindToController: true,
            scope: {
            }
        };
    }

    return Component;
});