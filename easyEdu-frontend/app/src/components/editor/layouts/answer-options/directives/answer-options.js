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
                selectedActivity: "="
            }
        };
    }

    Controller.$inject = ['DifficultyLevels'];
    /*@ngInject*/
    function Controller(DifficultyLevels) {
        var vm = this;

        vm.activities = [];
        vm.difficultyLevels = DifficultyLevels.getLevels();

        vm.doneFile = doneFile;
        vm.removeFile = removeFile;

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