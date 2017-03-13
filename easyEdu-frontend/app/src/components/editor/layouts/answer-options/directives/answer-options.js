define([], function() {
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

    Controller.$inject = [];
    /*@ngInject*/
    function Controller() {
        var vm = this;

        vm.doneFile = doneFile;
        vm.activities = [];
        // [{file: {link: 'http://localhost:8080/uploads/IMG_20130326_085727.jpg'}}];

        /**
         * Upload Callback
         * @param files
         */
        function doneFile(files, activity) {
            if (!files) {
                return;
            }

            // activity.file = angular.fromJson(files[0]._xhr.response);
            activity.file = {link: 'http://localhost:8080/uploads/IMG_20140730_161209825_HDR.jpg'};

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

    }

    return Component;
});