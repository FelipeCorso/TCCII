define([], function () {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/answer-options/view/_answer-options.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                selectedActivity: "=",
                category: "="
            }
        };
    }

    Controller.$inject = ['DifficultyLevels'];
    /*@ngInject*/
    function Controller(DifficultyLevels) {
        var vm = this;

        vm.isAllSelected = false;
        vm.category.activities = [];
        vm.difficultyLevels = DifficultyLevels.getLevels();

        vm.isActivityAnswerEmpty = isActivityAnswerEmpty;
        vm.addActivity = addActivity;
        vm.isEnabledBtnExport = isEnabledBtnExport;
        vm.exportActivities = exportActivities;
        vm.optionToggled = optionToggled;
        vm.toggleAll = toggleAll;
        vm.doneFile = doneFile;
        vm.removeFile = removeFile;

        function isActivityAnswerEmpty() {
            var isActivityAnswerEmpty = false;
            angular.forEach(vm.category.activities, function (activity) {
                if (!activity.answer) {
                    isActivityAnswerEmpty = true;
                    return;
                }
            });

            return isActivityAnswerEmpty;
        }

        function addActivity() {
            vm.category.activities.push(
                {
                    export: vm.isAllSelected,
                    level: "EASY"
                }
            );
        }

        function isEnabledBtnExport() {
            return vm.category.activities ? vm.category.activities.filter(function (activity) {
                return activity.export;
            }).length : 0;
        }

        function exportActivities() {
            var selectedActivities = vm.category.activities.filter(function (activity) {
                return activity.export;
            });

            var category = angular.copy(vm.category);
            category.activities = selectedActivities;

            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(category));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", "activities.json");
            dlAnchorElem.click();
        }

        function optionToggled() {
            vm.isAllSelected = vm.category.activities.every(function (itm) {
                return itm.export;
            });
        }

        function toggleAll() {
            angular.forEach(vm.category.activities, function (activity) {
                activity.export = vm.isAllSelected;
            });
        }

        /**
         * Upload Callback
         * @param file
         */
        function doneFile(file, activity) {
            if (!file) {
                return;
            }

            if (!activity.files) {
                activity.files = {};
            }

            var fileType = file._file.type;
            if (/\/(png|jpeg|jpg|gif)$/.test(fileType)) {
                activity.files.image = angular.fromJson(file._xhr.response);
            } else {
                if (/\/(mp3)$/.test(fileType)) {
                    activity.files.audio = angular.fromJson(file._xhr.response);
                }
            }


            //activity.file = {link: 'http://localhost:8080/uploads/IMG_20140730_161209825_HDR.jpg'};

            // if (uploadType) {
            //     if (uploadType.toUpperCase() === 'ANSWER') {
            //         vm.answer = angular.fromJson(files[0]._xhr.response);
            //     } else {
            //         if (uploadType.toUpperCase() === 'ANSWER_OPTIONS') {
            //             var length = files.length;
            //             for (i = 0; i < length; i++) {
            //                 var item = angular.fromJson(files[i]._xhr.response);
            //                 vm.answerOptions.push(item[0]);
            //             }
            //         }
            //     }
            // }
            // vm.queueList = [];
            // vm.uploadIsDone = true;
        }

        /**
         * Remove Callback
         * @param file
         */
        function removeFile(file, activity) {
            if (!file) {
                return;
            }

            if (!activity.files) {
                activity.files = {};
            }

            var fileType = file._file.type;
            if (/\/(png|jpeg|jpg|gif)$/.test(fileType)) {
                activity.files.image = {};
            } else {
                if (/\/(mp3)$/.test(fileType)) {
                    activity.files.audio = {};
                }
            }
        }

    }

    return Component;
});