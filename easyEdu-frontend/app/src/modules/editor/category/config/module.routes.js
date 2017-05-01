define(function() {
    'use strict';
    var partialPath = "src/modules/editor/category/views/";
    return [
        {
            state: 'editor.category',
            config: {
                controller: "CategoryCtrl",
                controllerAs: "vm",
                resolve: {
                    CategoryData: CategoryData
                },
                url: "/category?id",
                templateUrl: partialPath + "index.html"
            }
        }
    ];

    CategoryData.$inject = ["$stateParams", 'CategorySvc'];
    /*@ngInject*/
    function CategoryData($stateParams, CategorySvc) {
        var category = {name: "", activities: []};
        if ($stateParams.id) {
            category = CategorySvc.get($stateParams.id);
        }
        return category;
    }
});