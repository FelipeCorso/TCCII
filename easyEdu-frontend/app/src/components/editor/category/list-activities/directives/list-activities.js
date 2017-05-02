define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/category/list-activities/view/_list-activities.html',
            controller: function() {
                var vm = this;

                vm.selectActivity = selectActivity;

                function selectActivity(activity) {
                    vm.selectedActivity = activity;
                }
            },
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                activities: "=",
                selectedActivity: "=",
                optionToggled: "&"
            }
        };
    }

    return Component;
});