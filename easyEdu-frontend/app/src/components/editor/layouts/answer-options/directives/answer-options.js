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
        vm.category.activies = [];
        vm.difficultyLevels = DifficultyLevels.getLevels();

        vm.isActivityAnswerEmpty = isActivityAnswerEmpty;
        vm.addActivity = addActivity;
        vm.exportActivities = exportActivities;
        vm.optionToggled = optionToggled;
        vm.toggleAll = toggleAll;
        vm.doneFile = doneFile;
        vm.removeFile = removeFile;

        function isActivityAnswerEmpty() {
            var isActivityAnswerEmpty = false;
            angular.forEach(vm.category.activies, function (activity) {
                if (!activity.answer) {
                    isActivityAnswerEmpty = true;
                    return;
                }
            });

            return isActivityAnswerEmpty;
        }

        function addActivity() {
            vm.category.activies.push(
                {
                    export: vm.isAllSelected
                }
            );
        }

        function exportActivities() {
            var selectedActivities = vm.category.activies.filter(function (activity) {
                return activity.export;
            });

            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vm.category));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", "activities.json");
            dlAnchorElem.click();
        }

        function optionToggled() {
            vm.isAllSelected = vm.category.activies.every(function (itm) {
                return itm.export;
            });
        }

        function toggleAll() {
            angular.forEach(vm.category.activies, function (activity) {
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