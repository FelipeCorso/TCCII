define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/insert-image/view/_insert-image.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                altImage: "@",
                model: "=",
                multipleSelect: "="
            }
        };
    }

    Controller.$inject = ["$scope", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($scope, AuthorizationSvc) {
        var vm = this;

        vm.authSvc = AuthorizationSvc;
        vm.hasImage = hasImage;
        vm.imageSelected = imageSelected;
        vm.imageRemoved = imageRemoved;

        // A simple callback implementation.
        function imageSelected(data) {
            if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                var doc = data[google.picker.Response.DOCUMENTS][0];
                vm.model.image = {};
                vm.model.image.id = doc[google.picker.Document.ID];
                vm.model.image.name = doc[google.picker.Document.NAME];
                $scope.$apply();
            }
        }

        function hasImage() {
            return vm.model.image && vm.model.image.id;
        }

        function imageRemoved() {
            vm.model.image = {};
        }
    }

    return Component;
});