define(function() {
    'use strict';
    return [
        {
            state: 'editor',
            config: {
                url: "/editor",
                // controller: 'contactsCtrl as vm',
                abstract: true,
                // templateUrl: partialPath + "contacts/index.html"
                template: '<div ui-view></div>'
            }
        }
    ];
});