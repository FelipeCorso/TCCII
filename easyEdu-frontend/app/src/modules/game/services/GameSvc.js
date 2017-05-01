define(function() {
    'use strict';
    Service.$inject = ['$http', '$q'];
    /*@ngInject*/
    function Service($http, $q) {
        var category = undefined;

        var service = {
            getCategory: getCategory,
            setCategory: setCategory
        };

        return service;

        function getCategory() {
            return category;
        }

        function setCategory(categoriesParam) {
            category = categoriesParam;
        }
    }

    return Service;
});