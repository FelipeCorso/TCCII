define([], function () {
    'use strict';
    Controller.$inject = [];
    /*@ngInject*/
    function Controller() {
        var vm = this;

        vm.selectedActivity = {};
        vm.category = {name: "", alphabet: "", type:"LETTERS"};

        vm.items = [];
        vm.groups = ['Friends', 'Family', 'Others'];
        vm.toggleSelected = toggleSelected;
        vm.add = add;
        vm.getSelected = getSelected;
        vm.deleteSelected = deleteSelected;

        function getAllContacts() {
            contactsSvc.getAllContacts().then(function (data) {
                vm.items = data.items;
            });
        }

        function toggleSelected(item) {
            item.selected = !item.selected;
        }

        function add(newItem) {
            vm.items.push(newItem);
            delete vm.newItem;
            vm.showForm = false;
        }

        function getSelected() {
            return vm.items.filter(function (item) {
                return item && item.selected;
            });
        }

        function deleteSelected(items) {
            if (!confirm('Are you sure?')) return false;
            vm.items = items.filter(function (item) {
                return !item.selected;
            });
        }

    }

    return Controller;
});