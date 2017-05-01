define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/category/list-activities/view/_list-activities.html',
            controller: function() {
                var vm = this;
            },
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                activities: "=",
                selectedActivity: "="
            }
        };
    }

    return Component;
});