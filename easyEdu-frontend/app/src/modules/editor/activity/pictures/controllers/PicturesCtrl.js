define([], function () {
    'use strict';
    Controller.$inject = [];
    /*@ngInject*/
    function Controller() {
        var vm = this;

        vm.selectedActivity = {};
        vm.category = {name: "", alphabet: "", type:"PICTURES"};

    }

    return Controller;
});