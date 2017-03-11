define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/answer-options/view/_answer-options.html',
            controller: function() {},
            controllerAs: 'vm',
            bindToController: true,
            scope: {
            }
        };
    }

    return Component;
});