define([], function() {
    'use strict';
    Controller.$inject = ["$scope", "$stateParams", "moment", "CategoryData", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($scope, $stateParams, moment, CategoryData, AuthorizationSvc) {
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
        vm.saveCategory = saveCategory;
        vm.saveActivity = saveActivity;
        vm.categoryImageSelected = categoryImageSelected;
        vm.categoryImageRemoved = categoryImageRemoved;
        vm.hasImage = hasImage;
        vm.copySelectedActivity = copySelectedActivity;

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
                answers: [],
                correctAnswers: 0,
                export: vm.isAllSelected,
                level: "EASY",
                parent: vm.category.parent
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
            AuthorizationSvc.createJson(moment().valueOf(), category, vm.category.parent)
                .then(function(exportedCategory) {
                    vm.qrCodeData = "http://192.168.1.10:8000/app/#/game/start?categoryId=" + exportedCategory.id;
                });
        }

        function saveCategory() {
            return AuthorizationSvc.updateJson($stateParams.id, vm.category, vm.category.parent);
        }

        function saveActivity() {
            if (!vm.category.activities) {
                vm.category.activities = [];
            }
            vm.category.activities.push(vm.selectedActivity);
            vm.selectedActivity = undefined;
        }

        // A simple callback implementation.
        function categoryImageSelected(data) {
            if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                var doc = data[google.picker.Response.DOCUMENTS][0];
                vm.category.image = {};
                vm.category.image.id = doc[google.picker.Document.ID];
                vm.category.image.name = doc[google.picker.Document.NAME];
                $scope.$apply();
            }
        }

        function hasImage() {
            return vm.category.image && vm.category.image.id;
        }

        function copySelectedActivity() {
            vm.selectedActivityCopy = angular.copy(vm.selectedActivity);
        }

        function categoryImageRemoved() {
            vm.category.image = {};
        }
    }

    return Controller;
});