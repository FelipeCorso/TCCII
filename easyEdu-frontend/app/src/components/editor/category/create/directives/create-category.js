define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/category/create-category/view/_create-category.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                category: "="
            }
        };
    }

    Controller.$inject = ["AuthorizationSvc"];
    function Controller(AuthorizationSvc) {
        var vm = this;

        vm.saveCategory = saveCategory;

        function saveCategory() {
            if (AuthorizationSvc.isSignedInGoogle()) {
                return AuthorizationSvc.isExistRootFolder()
                    .then(function(rootFolder) {
                        if (rootFolder) {
                            return rootFolder;
                        }
                        return AuthorizationSvc.createRootFolder()
                            .then(function(rootFolder) {
                                return AuthorizationSvc.createFile("metadata.json", undefined, rootFolder.id)
                                    .then(function() {
                                        return rootFolder;
                                    });
                            });
                    })
                    .then(function(rootFolder) {
                        return AuthorizationSvc.createFolder(vm.category.name, rootFolder.id);
                    })
                    .then(function(categoryFolder) {
                        return AuthorizationSvc.createFile(vm.category.name, vm.category, categoryFolder.id);
                    });
            }
        }
    }

    return Component;
});