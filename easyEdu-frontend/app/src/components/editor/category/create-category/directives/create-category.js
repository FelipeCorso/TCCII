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

    Controller.$inject = ["$state", "AuthorizationSvc"];
    function Controller($state, AuthorizationSvc) {
        var vm = this;
        vm.rootFolder = {};
        vm.metadata = {};
        vm.categoryFolder = {};
        vm.categoryMetadata = {};

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
                                return AuthorizationSvc.createJson("metadata", [], rootFolder.id)
                                    .then(function(metadata) {
                                        vm.metadata = metadata;
                                        return rootFolder;
                                    })
                                    .catch(function(error) {
                                        console.log(error);
                                    });
                            });
                    })
                    .then(function(rootFolder) {
                        vm.rootFolder = rootFolder;
                        return AuthorizationSvc.createFolder(vm.category.name, rootFolder.id);
                    })
                    .then(function(categoryFolder) {
                        vm.categoryFolder = categoryFolder;
                        return AuthorizationSvc.createJson(vm.category.name, vm.category, categoryFolder.id);
                    })
                    .then(function(categoryMetadata) {
                        vm.categoryMetadata = categoryMetadata;
                        return AuthorizationSvc.searchFile(vm.rootFolder.id, "metadata.json");
                    })
                    .then(function(metadataRoot) {
                        vm.metadata = metadataRoot;
                        return AuthorizationSvc.getFile(vm.metadata.id);
                    })
                    .then(function(metadataContent) {
                        metadataContent.push({
                            name: vm.category.name,
                            id: vm.categoryMetadata.id
                        });
                        return AuthorizationSvc.updateJson(vm.metadata.id, metadataContent, vm.rootFolder.id);
                    })
                    .then(function() {
                        $state.go("editor.category.edit", {id: vm.categoryMetadata.id});
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    }

    return Component;
});