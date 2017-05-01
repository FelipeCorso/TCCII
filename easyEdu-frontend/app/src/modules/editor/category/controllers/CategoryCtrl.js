define([], function() {
    'use strict';
    Controller.$inject = ["CategoryData"];
    /*@ngInject*/
    function Controller(CategoryData) {
        var vm = this;

        vm.selectedActivity = {};
        vm.category = CategoryData;

        vm.toggleAll = toggleAll;
        vm.addActivity = addActivity;
        vm.isEnabledBtnExport = isEnabledBtnExport;
        vm.getActivitiesToExport = getActivitiesToExport;
        vm.exportJSON = exportJSON;
        vm.generateQrCode = generateQrCode;

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
            var category = getActivitiesToExport();
            vm.qrCodeData = "http://felipe-not:8000/app/#/game/?category=" + encodeURIComponent(JSON.stringify(category));
        }
    }

    return Controller;
});