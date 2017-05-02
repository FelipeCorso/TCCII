define([], function() {
    'use strict';
    Controller.$inject = ["CategoryData"];
    /*@ngInject*/
    function Controller(CategoryData) {
        var vm = this;

        vm.isAllSelected = false;
        vm.selectedActivity = undefined;
        vm.category = CategoryData;

        vm.optionToggled = optionToggled;
        vm.toggleAll = toggleAll;
        vm.addActivity = addActivity;
        vm.isEnabledBtnExport = isEnabledBtnExport;
        vm.getActivitiesToExport = getActivitiesToExport;
        vm.exportJSON = exportJSON;
        vm.generateQrCode = generateQrCode;
        vm.saveActivity = saveActivity;

        function optionToggled() {
            vm.isAllSelected = vm.category.activities.every(function(item) {
                return item.export;
            });
        }

        function toggleAll() {
            angular.forEach(vm.category.activities, function(activity) {
                activity.export = vm.isAllSelected;
            });
        }

        function addActivity() {
            vm.selectedActivity = {
                export: vm.isAllSelected,
                level: "EASY"
            }
        }

        function isEnabledBtnExport() {
            return vm.category.activities ? vm.category.activities.filter(function(activity) {
                return activity.export;
            }).length : 0;
        }

        function getActivitiesToExport() {
            var selectedActivities = vm.category.activities.filter(function(activity) {
                return activity.export;
            });

            var category = angular.copy(vm.category);
            category.activities = selectedActivities;
            return category;
        }

        function exportJSON() {
            var category = getActivitiesToExport();

            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(category));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", "activities.json");
            dlAnchorElem.click();
        }

        function generateQrCode() {
            vm.qrCodeData = "http://192.168.1.10:8000/app/#/game/?categoryId=" + "B1B2";
        }

        function saveActivity() {
            if (!vm.category.activities) {
                vm.category.activities = [];
            }
            vm.category.activities.push(vm.selectedActivity);
            vm.selectedActivity = undefined;
        }
    }

    return Controller;
});