define(function () {
    "use strict";
    function phoneBook() {
        var partialPath = "src/components/contactList/emailBook/view/";
        return {
            restrict: 'E',
            templateUrl: partialPath + '_emailBook.html',
            controller: phoneBookCtrl,
            controllerAs: 'pb', //phoneBook
            bindToController: true
        }
    }

    phoneBookCtrl.$inject = ['contactsSvc'];

    /*@ngInject*/
    function phoneBookCtrl(contactsSvc) {
        var vm = this;
        vm.items = [];
        vm.isReady = false;
        contactsSvc.getAllContacts().then(function (data) {
            vm.items = data.items;
            vm.isReady = true;
        }).catch(function () {
            vm.isReady = true;
        });
    }
    return phoneBook;
});
